import warnings; warnings.filterwarnings("ignore")
import json, os, re, argparse
import numpy as np
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt
from asammdf import MDF

ap = argparse.ArgumentParser(description="Genera grafici per caso e liste JSON per Word/PPT")
ap.add_argument("--mf4", required=True, help="misura del SW in test (.mf4)")
ap.add_argument("--results", default=os.environ.get("RESULTS", "results_iso.json"))
ap.add_argument("--dbc-lookup", default=os.environ.get("DBC_LOOKUP", "dbc_lookup.json"))
args = ap.parse_args()
MF4 = args.mf4
OUT = "cases"
os.makedirs(OUT, exist_ok=True)
results = json.load(open(args.results))
dbc = json.load(open(args.dbc_lookup))
mdf = MDF(MF4); names = list(mdf.channels_db.keys()); nset = set(names)

def resolve(sig, sw):
    if sig in nset: return sig
    v = [n for n in names if n.startswith(sig + ".") and ":" not in n]
    if not v: return sig
    for h in re.findall(r'[0-9A-Fa-f]{3}', sw):
        for x in v:
            if x.upper().endswith(h.upper()): return x
    return sorted(v)[0]

def series(name):
    e = mdf.channels_db.get(name)
    if not e: return None, None
    g, i = e[0]; s = mdf.get(name, group=g, index=i)
    if s.samples.dtype.kind not in "iuf": s = mdf.get(name, group=g, index=i, raw=True)
    v = np.asarray(s.samples, float); t = np.asarray(s.timestamps, float); m = np.isfinite(v)
    return t[m], v[m]

def enum_txt(sig, val):
    e = dbc.get(sig)
    if not e or not e.get("values"): return None
    try: k = str(int(round(val)))
    except: return None
    return e["values"].get(k)

def safe(s): return re.sub(r'[^A-Za-z0-9_.-]', '_', s)
def fnum(v):
    if v is None: return "n/d"
    return str(int(round(v))) if abs(v-round(v))<1e-6 else f"{v:.3g}"

PLOT = {"MISMATCH", "SW_NOT_EVOLVING", "NO_DATA_SIGNAL", "MISSING_SWVAR", "NO_OVERLAP"}
order = {"SW_NOT_EVOLVING":0,"MISMATCH":1,"NO_OVERLAP":2,"NO_DATA_SIGNAL":3,"MISSING_SWVAR":4}
cases = [r for r in results if r["status"] in PLOT]
cases.sort(key=lambda r:(order.get(r["status"],9), r["Signal Name"]))

# import categoria/verdict from report2
import importlib.util
spec=importlib.util.spec_from_file_location("rep","report2.py")
# instead re-implement minimal categoria via exec of report2 defs
ns={}
src=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),"report2.py")).read().split("wb = openpyxl.Workbook")[0]
exec(src, ns)
categoria=ns["categoria"]; verdict=ns["verdict"]; enum_of=ns["enum_of"]

meta=[]
for idx,r in enumerate(cases,1):
    sig,sw=r["Signal Name"],r["Sw Variable"]; st=r["status"]
    ts,vs=series(resolve(sig,sw)); tw,vw=series(sw)
    fig,ax=plt.subplots(figsize=(7.2,3.0)); pl=False
    if ts is not None and len(ts): ax.plot(ts,vs,color="#1f77b4",lw=1.1,label="CAN",drawstyle="steps-post"); pl=True
    if tw is not None and len(tw): ax.plot(tw,vw,color="#d62728",lw=1.1,alpha=0.8,label="SW",drawstyle="steps-post"); pl=True
    e=dbc.get(sig,{}); unit=e.get("unit","")
    ax.set_title(f"{sig}  vs  {sw}"+(f"  [{unit}]" if unit and unit not in('-','') else ""),fontsize=8.5)
    ax.set_xlabel("t [s]",fontsize=7); ax.tick_params(labelsize=6.5); ax.grid(True,alpha=0.25,lw=0.4)
    if pl: ax.legend(fontsize=6.5,loc="best")
    else: ax.text(0.5,0.5,"nessun campione",ha="center",va="center",transform=ax.transAxes)
    fig.tight_layout(); fn=f"{OUT}/{idx:03d}_{st}_{safe(sig)}.png"; fig.savefig(fn,dpi=110,bbox_inches="tight"); plt.close(fig)
    from PIL import Image
    with Image.open(fn) as im: iw,ih=im.size
    es,note=verdict(r); cat=categoria(r)
    # descrizione + disposizione
    slo,shi=fnum(r.get("sig_min")),fnum(r.get("sig_max")); wlo,whi=fnum(r.get("sw_min")),fnum(r.get("sw_max"))
    dirw="ricevuto da CMM" if r.get("cmm_dir")=="RX" else ("trasmesso da CMM" if r.get("cmm_dir")=="TX" else "")
    frm=f"frame {e.get('msg','')}"+(f" @ {r.get('cycle_ms')} ms" if r.get("cycle_ms") not in (None,"") else "")
    if st=="MISMATCH":
        desc=f"Il confronto CAN «{sig}» / SW «{sw}» ({frm}, {dirw}) non è coerente: {note}."
        disp="ESITO FINALE: DEVIAZIONE REALE — non giustificata (da correggere)"; dc="C00000"
        dr="Deviazione a livello applicativo (valori/scala/logica): da correggere lato SW."
    elif st=="SW_NOT_EVOLVING":
        desc=f"La variabile «{sw}» resta costante a {wlo} mentre il CAN «{sig}» evolve [{slo},{shi}]{(' '+unit) if unit not in('-','') else ''} ({frm})."
        disp="ESITO FINALE: DEVIAZIONE REALE — SW non evolve (match nullo)"; dc="C00000"
        dr="La SW non aggiorna/riceve il segnale internamente (regola 1). Frame non escluso da config: difetto da correggere lato SW."
    elif st=="NO_OVERLAP":
        desc=f"CAN «{sig}» e SW «{sw}» non hanno sovrapposizione temporale nella misura: confronto non eseguibile."
        disp="ESITO FINALE: N/D — nessun overlap temporale"; dc="B45309"
        dr="I due canali non sono registrati nello stesso intervallo: da rivedere la configurazione di acquisizione."
    elif st=="NO_DATA_SIGNAL":
        desc=f"Il segnale CAN «{sig}» ({frm}) è definito nel DB ma non è mai stato trasmesso nella misura: nessun campione."
        disp="ESITO FINALE: N/D — segnale CAN non trasmesso"; dc="B45309"
        dr="Da verificare se la funzione/condizione che genera il frame dovesse essere attivata in questo scenario di guida."
    elif st=="MISSING_SWVAR":
        desc=f"La variabile interna «{sw}» non è tra i canali acquisiti; il CAN «{sig}» è presente."
        disp="ESITO FINALE: N/D — variabile SW da configurare"; dc="B45309"
        dr="Aggiungere la variabile alla configurazione di acquisizione (A2L/label) e ripetere la misura."
    else:
        desc=note; disp="ESITO FINALE: "+es; dc="B45309"; dr=""
    if r.get("only_1K137"):
        disp="ESITO FINALE: DEVIAZIONE — presente SOLO in 1K137 (potenziale regressione)"; dc="C00000"
        dr="Nella misura con SW 1K136 questo segnale insegue correttamente, mentre in 1K137 devia: da verificare con priorità (possibile regressione introdotta dal 1K137)."
    meta.append({"idx":idx,"signal":sig,"sw":sw,"status":st,"titolo":es,"categoria":cat,
                 "descrizione":desc,"disp":disp,"disp_color":dc,"disp_reason":dr,
                 "bus":e.get("bus",""),"msg":e.get("msg",""),"cmm_dir":r.get("cmm_dir",""),
                 "cycle_ms":r.get("cycle_ms",""),"tx":e.get("tx",""),"img":fn,"img_w":iw,"img_h":ih})
json.dump(meta,open("cases_meta.json","w"),ensure_ascii=False,indent=1,default=str)

# config + ok + suspect lists
ce=[]
for r in results:
    if r["status"]=="CONFIG_EXCLUDED":
        e=dbc.get(r["Signal Name"],{})
        prev={"NO_DATA_SIGNAL":"segnale non trasmesso","SW_NOT_EVOLVING":"SW non evolve","MISMATCH":"divergenza","MISSING_SWVAR":"variabile SW assente"}.get(r.get("prev_status"),"non acquisito")
        ce.append({"sig":r["Signal Name"],"sw":r["Sw Variable"],"hex":r.get("frame_hex"),"msg":e.get("msg",""),"prev":prev})
ce.sort(key=lambda z:(z["hex"],z["sig"])); json.dump(ce,open("config_list.json","w"),ensure_ascii=False)
susp=[]
for r in results:
    if r["status"]=="SUSPECT":
        e=dbc.get(r["Signal Name"],{}); mf=r.get("match_frac"); corr=r.get("corr")
        m=f"{mf*100:.0f}% match" if mf is not None else (f"corr {corr:.2f}" if corr is not None else "")
        susp.append({"sig":r["Signal Name"],"sw":r["Sw Variable"],"msg":e.get("msg",""),"cyc":r.get("cycle_ms",""),"m":m,"kind":r.get("kind","")})
susp.sort(key=lambda z:z["sig"]); json.dump(susp,open("suspect_list.json","w"),ensure_ascii=False)
ok=[]
for r in results:
    if r["status"] in ("OK","REMAP"):
        e=dbc.get(r["Signal Name"],{}); mf=r.get("match_frac"); corr=r.get("corr")
        m=f"{mf*100:.0f}%" if mf is not None else (f"{corr:.2f}" if corr is not None else "-")
        ok.append({"sig":r["Signal Name"],"sw":r["Sw Variable"],"bus":e.get("bus",""),"msg":e.get("msg",""),"dir":r.get("cmm_dir",""),"cyc":r.get("cycle_ms",""),"m":m,"remap":r["status"]=="REMAP"})
ok.sort(key=lambda z:z["sig"]); json.dump(ok,open("ok_list.json","w"),ensure_ascii=False)
print("Casi con grafico:",len(meta),"| config:",len(ce),"| suspect:",len(susp),"| ok:",len(ok))

iso=[]
for r in results:
    if r["status"]=="ISO_1K136":
        e=dbc.get(r["Signal Name"],{})
        iso.append({"sig":r["Signal Name"],"sw":r["Sw Variable"],"msg":e.get("msg",""),
                    "dev":{"MISMATCH":"divergenza","SW_NOT_EVOLVING":"SW non evolve"}.get(r.get("prev_status_iso"),"deviazione"),
                    "ref":r.get("ref_1K136","")})
iso.sort(key=lambda z:z["sig"]); json.dump(iso,open("iso_list.json","w"),ensure_ascii=False)
# only-1K137 (deviazioni non in 1K136)
only=[]
for r in results:
    if r.get("only_1K137"):
        e=dbc.get(r["Signal Name"],{})
        only.append({"sig":r["Signal Name"],"sw":r["Sw Variable"],"msg":e.get("msg",""),"st":r["status"]})
json.dump(only,open("only1k137_list.json","w"),ensure_ascii=False)
print("iso:",len(iso),"| only-1K137:",len(only))

# statistiche per Word/PPT (nessun numero hard-coded nei builder)
from collections import Counter
cnt = Counter(r["status"] for r in results)
dur = max((float(mdf.get_master(g)[-1]) for g in range(len(mdf.groups)) if mdf.get_master(g) is not None and len(mdf.get_master(g))), default=0.0)
stats = {"total": len(results), "ok": cnt["OK"], "remap": cnt["REMAP"], "config": cnt["CONFIG_EXCLUDED"],
         "iso": cnt["ISO_1K136"], "susp": cnt["SUSPECT"], "mm": cnt["MISMATCH"], "swne": cnt["SW_NOT_EVOLVING"],
         "nd_sig": cnt["NO_DATA_SIGNAL"], "nd_sw": cnt["MISSING_SWVAR"], "nd_ovl": cnt["NO_OVERLAP"],
         "only": len(only), "n_channels": len(names), "duration_min": round(dur / 60.0, 1)}
stats["real_ko"] = stats["mm"] + stats["swne"]
stats["dev_raw"] = stats["iso"] + stats["real_ko"]
stats["nd"] = stats["nd_sig"] + stats["nd_sw"] + stats["nd_ovl"]
stats["noncomp"] = stats["real_ko"] - stats["only"]
json.dump(stats, open("stats.json", "w"), indent=1)
print("stats:", stats)
