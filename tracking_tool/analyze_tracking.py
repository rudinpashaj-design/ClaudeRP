import warnings
warnings.filterwarnings("ignore")
import json
import numpy as np
import openpyxl
from asammdf import MDF

import argparse

ap = argparse.ArgumentParser(description="Verifica inseguimento coppie Signal Name / Sw Variable su misura MF4")
ap.add_argument("--mf4", required=True, help="file di misura .mf4")
ap.add_argument("--xlsx", required=True, help="Excel con colonne Signal Name | Sw Variable (primo foglio)")
ap.add_argument("--dbc-lookup", default="dbc_lookup.json", help="JSON prodotto da build_dbc_lookup.py")
ap.add_argument("--out", default="results.json", help="file JSON dei risultati")
args = ap.parse_args()

DBC = json.load(open(args.dbc_lookup))
MF4 = args.mf4
XLSX = args.xlsx

BOOL_MAP = {"FALSE": 0, "TRUE": 1, "OFF": 0, "ON": 1, "NO": 0, "YES": 1,
            "INACTIVE": 0, "ACTIVE": 1, "NOT_ACTIVE": 0, "INVALID": -1}

def frame_cycle_s(sig):
    e = DBC.get(sig)
    return (e.get("cycle_ms") or 0) / 1000.0 if e else 0.0

def build_grid(t0, t1, cyc_s, t_can):
    if cyc_s and cyc_s > 0:
        n = int(round((t1 - t0) / cyc_s)) + 1
        n = max(3, min(n, 400000))
        return t0 + cyc_s * np.arange(n)
    g = t_can[(t_can >= t0) & (t_can <= t1)]
    return g if len(g) >= 3 else np.linspace(t0, t1, 50)

def step_hold(t_src, v_src, grid):
    idx = np.clip(np.searchsorted(t_src, grid, side="right") - 1, 0, len(v_src) - 1)
    return v_src[idx]

def varies(v):
    vmin, vmax = float(np.min(v)), float(np.max(v))
    return (vmax - vmin) > 1e-6 * (1.0 + max(abs(vmin), abs(vmax)))

def best_match_with_delay(a, b, w=1):
    n = len(a)
    within = (a == b)
    dom = 0
    if n > 1:
        for s in range(1, w + 1):
            lag = np.zeros(n, bool); lag[s:] = (b[s:] == a[:-s])
            lead = np.zeros(n, bool); lead[:-s] = (b[:-s] == a[s:])
            within = within | lag | lead
        cand = {0: float(np.mean(a == b))}
        for s in range(1, w + 1):
            cand[s] = float(np.mean(b[s:] == a[:-s])) if n > s else 0.0
            cand[-s] = float(np.mean(b[:-s] == a[s:])) if n > s else 0.0
        dom = max(cand, key=cand.get)
    return float(np.mean(within)), dom

wb = openpyxl.load_workbook(XLSX, data_only=True)
ws = wb.worksheets[0]
pairs, seen = [], set()
for r in list(ws.iter_rows(values_only=True))[1:]:
    if not r or r[0] is None or r[1] is None:
        continue
    sig, sw = str(r[0]).strip(), str(r[1]).strip()
    if (sig, sw) in seen:
        continue
    seen.add((sig, sw)); pairs.append((sig, sw))

mdf = MDF(MF4)
names = list(mdf.channels_db.keys())
names_set = set(names)

def get_first(name, raw=False):
    e = mdf.channels_db.get(name)
    if not e:
        return None
    g, i = e[0]
    try:
        return mdf.get(name, group=g, index=i, raw=raw)
    except Exception:
        return None

def normalize(s):
    samples, ts = s.samples, s.timestamps
    if samples.dtype.kind in "iuf":
        return ts, samples.astype(float), "num"
    out = []
    for v in samples:
        if isinstance(v, bytes):
            v = v.decode("utf-8", "ignore")
        out.append(str(v).strip().upper())
    out = np.array(out)
    if set(out.tolist()) <= set(BOOL_MAP):
        return ts, np.array([BOOL_MAP[v] for v in out], float), "num"
    return ts, out, "str"

def resolve_name(sig, sw):
    if sig in names_set:
        return sig
    import re
    v = [n for n in names if n.startswith(sig + ".") and ":" not in n]
    if not v:
        v = [n for n in names if n.split(":")[-1].startswith(sig + ".")]
    if not v:
        return None
    for h in re.findall(r'[0-9A-Fa-f]{3}', sw):
        for x in v:
            if x.upper().endswith("_" + h.upper()) or x.upper().endswith(h.upper()):
                return x
    return sorted(v)[0]

results = []
for sig, sw in pairs:
    row = {"Signal Name": sig, "Sw Variable": sw}
    resolved = resolve_name(sig, sw)
    if resolved and resolved != sig:
        row["resolved_signal"] = resolved
    sig_key = resolved if resolved else sig
    sig_found = resolved is not None
    sw_found = sw in names_set
    if not sig_found or not sw_found:
        row["status"] = "MISSING_BOTH" if (not sig_found and not sw_found) else ("MISSING_SIGNAL" if not sig_found else "MISSING_SWVAR")
        results.append(row); continue
    s_sig = get_first(sig_key)
    if s_sig is not None and s_sig.samples.dtype.kind not in "iuf":
        s_sig = get_first(sig_key, raw=True)
    s_sw = get_first(sw)
    if s_sw is not None and s_sw.samples.dtype.kind not in "iuf":
        s_sw = get_first(sw, raw=True)
    sig_empty = s_sig is None or len(s_sig.samples) == 0
    sw_empty = s_sw is None or len(s_sw.samples) == 0
    if sig_empty or sw_empty:
        row["status"] = "NO_DATA_BOTH" if (sig_empty and sw_empty) else ("NO_DATA_SIGNAL" if sig_empty else "NO_DATA_SWVAR")
        results.append(row); continue
    try:
        t_sig, v_sig, k_sig = normalize(s_sig)
        t_sw, v_sw, k_sw = normalize(s_sw)
    except Exception as e:
        row["status"] = "EXTRACT_ERROR"; row["error"] = str(e); results.append(row); continue

    t0 = max(t_sig[0], t_sw[0]); t1 = min(t_sig[-1], t_sw[-1])
    if t1 <= t0:
        row["status"] = "NO_OVERLAP"; results.append(row); continue
    cyc_s = frame_cycle_s(sig)
    row["cycle_ms"] = int(round(cyc_s * 1000))
    row["cmm_dir"] = DBC.get(sig, {}).get("cmm_dir", "")
    common_t = build_grid(t0, t1, cyc_s, t_sig)
    DELAY_MS = 20.0
    w_tol = max(1, min(3, int(round(DELAY_MS / max(1e-9, cyc_s * 1000))))) if cyc_s > 0 else 1

    if k_sig == "str" or k_sw == "str":
        if k_sig != k_sw:
            row["status"] = "TYPE_MISMATCH"; results.append(row); continue
        a = step_hold(t_sig, v_sig, common_t); b = step_hold(t_sw, v_sw, common_t)
        sig_var = np.unique(v_sig).size > 1; sw_var = np.unique(v_sw).size > 1
        mf, sh = best_match_with_delay(a, b, w=w_tol)
        row.update({"match_frac": mf, "delay_samples": sh, "n_samples": len(common_t), "kind": "str",
                    "sig_varies": bool(sig_var), "sw_varies": bool(sw_var)})
        row["status"] = "SW_NOT_EVOLVING" if (sig_var and not sw_var) else ("OK" if mf > 0.97 else ("SUSPECT" if mf > 0.85 else "MISMATCH"))
        results.append(row); continue

    m_sig = np.isfinite(v_sig); m_sw = np.isfinite(v_sw)
    if m_sig.sum() < 2 or m_sw.sum() < 2:
        row["status"] = "NO_VALID_DATA"; results.append(row); continue
    t_sig, v_sig = t_sig[m_sig], v_sig[m_sig]; t_sw, v_sw = t_sw[m_sw], v_sw[m_sw]
    t0 = max(t_sig[0], t_sw[0]); t1 = min(t_sig[-1], t_sw[-1])
    if t1 <= t0:
        row["status"] = "NO_OVERLAP"; results.append(row); continue
    common_t = build_grid(t0, t1, cyc_s, t_sig)

    def is_disc(v):
        return np.all(np.isfinite(v)) and np.allclose(v, np.round(v)) and (np.unique(v).size <= 64)
    if is_disc(v_sig) and is_disc(v_sw):
        a = np.round(step_hold(t_sig, v_sig, common_t)); b = np.round(step_hold(t_sw, v_sw, common_t))
        sig_var = varies(v_sig); sw_var = varies(v_sw)
        mf, sh = best_match_with_delay(a, b, w=w_tol)
        remap = 0.0
        nu_a, nu_b = np.unique(a).size, np.unique(b).size
        if mf < 0.9 and nu_a >= 3 and nu_b >= 3 and max(nu_a, nu_b) <= len(a) / 10.0:
            mp = {}; ok = 0
            for x, y in zip(a, b):
                if x in mp:
                    ok += (mp[x] == y)
                else:
                    mp[x] = y; ok += 1
            remap = ok / len(a) if len(set(mp.values())) == len(mp) else 0.0
        row.update({"kind": "disc", "match_frac": mf, "remap_frac": remap, "delay_samples": sh,
                    "n_samples": len(common_t), "sig_varies": bool(sig_var), "sw_varies": bool(sw_var),
                    "sig_min": float(v_sig.min()), "sig_max": float(v_sig.max()),
                    "sw_min": float(v_sw.min()), "sw_max": float(v_sw.max())})
        if sig_var and not sw_var:
            row["status"] = "SW_NOT_EVOLVING"
        elif mf >= 0.97:
            row["status"] = "OK"
        elif mf >= 0.85:
            row["status"] = "SUSPECT"
        elif remap >= 0.97:
            row["status"] = "REMAP"
        else:
            row["status"] = "MISMATCH"
        results.append(row); continue

    sig_i = step_hold(t_sig, v_sig, common_t); sw_i = step_hold(t_sw, v_sw, common_t)
    rng = max(sig_i.max() - sig_i.min(), sw_i.max() - sw_i.min(), 1e-9)
    diff = sig_i - sw_i
    norm_err = float(np.mean(np.abs(diff))) / rng
    sig_var = varies(v_sig); sw_var = varies(v_sw)
    if not sig_var and not sw_var:
        corr = 1.0 if abs(sig_i[0] - sw_i[0]) < max(1e-6, 0.02 * max(abs(sig_i[0]), 1)) else 0.0
        const_case = True
    else:
        const_case = False
        try:
            corr = float(np.corrcoef(sig_i, sw_i)[0, 1]); corr = 0.0 if np.isnan(corr) else corr
        except Exception:
            corr = 0.0
    row.update({"sig_min": float(sig_i.min()), "sig_max": float(sig_i.max()),
                "sw_min": float(sw_i.min()), "sw_max": float(sw_i.max()),
                "norm_err": norm_err, "corr": corr, "const_case": const_case,
                "sig_varies": bool(sig_var), "sw_varies": bool(sw_var),
                "n_samples": len(common_t), "kind": "num"})
    if sig_var and not sw_var:
        row["status"] = "SW_NOT_EVOLVING"
    elif const_case:
        row["status"] = "OK" if corr == 1.0 else "MISMATCH"
    elif norm_err < 0.02 or corr > 0.98:
        row["status"] = "OK"
    elif corr > 0.85 or norm_err < 0.1:
        row["status"] = "SUSPECT"
    else:
        row["status"] = "MISMATCH"
    results.append(row)

# ---- vehicle-config reclassification via Ctrl_<FRAME>_<HEXID> ----
import re as _re
frame_cfg = {}
for _n in names:
    m = _re.search(r'Ctrl_.*?_([0-9A-Fa-f]{3})(_C)?$', _n)
    if not m:
        continue
    hx = m.group(1).upper()
    s = get_first(_n, raw=True)
    if s is None or len(s.samples) == 0:
        continue
    v = np.asarray(s.samples, float); v = v[np.isfinite(v)]
    if not len(v):
        continue
    u, c = np.unique(v, return_counts=True)
    val = float(u[np.argmax(c)])
    frame_cfg[hx] = min(frame_cfg[hx], val) if hx in frame_cfg else val

RECLASS = {"NO_DATA_SIGNAL", "NO_DATA_SWVAR", "NO_DATA_BOTH", "MISSING_SIGNAL",
           "MISSING_SWVAR", "MISSING_BOTH", "SW_NOT_EVOLVING", "MISMATCH"}
for row in results:
    e = DBC.get(row["Signal Name"], {})
    hx = ""
    mid = e.get("msg_id", "")
    if mid:
        mm = _re.search(r'([0-9A-Fa-f]{1,3})$', str(mid).replace("0x", ""))
        if mm:
            hx = mm.group(1).upper().zfill(3)
    row["frame_hex"] = hx
    cfg = frame_cfg.get(hx)
    row["frame_cfg"] = "" if cfg is None else ("TRUE" if cfg != 0 else "FALSE")
    if cfg == 0 and row["status"] in RECLASS:
        row["prev_status"] = row["status"]; row["status"] = "CONFIG_EXCLUDED"

with open(args.out, "w") as f:
    json.dump(results, f, indent=1, default=str)
from collections import Counter
print("Total pairs:", len(pairs))
print(dict(Counter(r["status"] for r in results)))
