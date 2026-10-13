"""Check di trasparenza: confronta i risultati del SW in test (es. 1K137) con la misura di riferimento (es. 1K136).

Regola: una deviazione (MISMATCH / SW_NOT_EVOLVING) del SW in test diventa ISO_1K136 ("Comportamento ISO")
solo se anche nel riferimento la stessa coppia mostra una deviazione (MISMATCH, SW_NOT_EVOLVING, SUSPECT).
Se nel riferimento la coppia e' OK/REMAP la deviazione resta reale e viene marcata only_1K137=True
(potenziale regressione). Se il riferimento non e' confrontabile (N/D, NO_OVERLAP) la deviazione resta KO.
"""
import argparse, json
from collections import Counter

ap = argparse.ArgumentParser()
ap.add_argument("--test", required=True, help="results.json della misura SW in test")
ap.add_argument("--ref", required=True, help="results.json della misura di riferimento")
ap.add_argument("--out", default="results_iso.json")
args = ap.parse_args()

f = json.load(open(args.test))
ref = {(r["Signal Name"], r["Sw Variable"]): r for r in json.load(open(args.ref))}
DEV = {"MISMATCH", "SW_NOT_EVOLVING"}
SIMILAR = {"MISMATCH", "SW_NOT_EVOLVING", "SUSPECT"}
niso = nkeep = nonly = 0
for r in f:
    if r["status"] in DEV:
        rs = ref.get((r["Signal Name"], r["Sw Variable"]), {}).get("status")
        r["ref_1K136"] = rs
        if rs in SIMILAR:
            r["prev_status_iso"] = r["status"]; r["status"] = "ISO_1K136"; niso += 1
        elif rs in ("OK", "REMAP"):
            r["only_1K137"] = True; nkeep += 1; nonly += 1
        else:
            nkeep += 1
json.dump(f, open(args.out, "w"), ensure_ascii=False, indent=1, default=str)
print(f"ISO: {niso} | restano KO: {nkeep} (di cui solo nel SW in test: {nonly})")
print("Distribuzione finale:", dict(Counter(r["status"] for r in f)))
