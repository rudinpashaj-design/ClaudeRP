"""Genera grafici, Excel, Word e PowerPoint a partire da results_iso.json (cross-platform).

Prerequisiti: analyze_tracking.py + compare_iso.py gia' eseguiti; Node.js con `npm install docx pptxgenjs`
(eseguito nella cartella reporting/ oppure globale con NODE_PATH).
"""
import argparse, os, subprocess, sys

ap = argparse.ArgumentParser()
ap.add_argument("--mf4", required=True, help="misura del SW in test (serve per i grafici)")
ap.add_argument("--results", default="results_iso.json")
ap.add_argument("--dbc-lookup", default="dbc_lookup.json")
ap.add_argument("--label", default="Misura (SW 1K137)", help="etichetta misura riportata nei documenti")
ap.add_argument("--outdir", default="output")
a = ap.parse_args()

here = os.path.dirname(os.path.abspath(__file__))
rep = os.path.join(here, "reporting")
os.makedirs(a.outdir, exist_ok=True)
out = os.path.abspath(a.outdir)
env = dict(os.environ,
           RESULTS=os.path.abspath(a.results), DBC_LOOKUP=os.path.abspath(a.dbc_lookup), MEAS_LABEL=a.label,
           OUT_XLSX=os.path.join(out, "Verifica_coppie.xlsx"),
           OUT_DOCX=os.path.join(out, "Rapporto_Inseguimento.docx"),
           OUT_PPTX=os.path.join(out, "Presentazione_Inseguimento.pptx"))
node_paths = [os.path.join(rep, "node_modules"), os.path.join(here, "node_modules")]
env["NODE_PATH"] = os.pathsep.join(node_paths + [env.get("NODE_PATH", "")])

def run(cmd):
    print(">>", " ".join(cmd)); subprocess.run(cmd, cwd=out, env=env, check=True)

run([sys.executable, os.path.join(rep, "gen_cases.py"), "--mf4", os.path.abspath(a.mf4)])  # cases/*.png + JSON + stats.json
run([sys.executable, os.path.join(rep, "report2.py")])                                       # Excel
run(["node", os.path.join(rep, "build_doc.js")])                                            # Word
run(["node", os.path.join(rep, "build_ppt.js")])                                            # PowerPoint
print("Fatto. File in", out)
