# Verifica inseguimento segnali CAN <-> variabili SW (MF4)

Requisiti: Python 3.9+, `pip install -r requirements.txt`

## 1. Lookup dai DBC (una tantum, i DBC restano locali)
    python build_dbc_lookup.py --hs1 CAN_HS1.dbc --hs2 CAN_HS2.dbc --out dbc_lookup.json

## 2. Analisi della misura (ripetere per ogni SW)
    python analyze_tracking.py --mf4 misura_1K137.mf4 --xlsx Listasegnali.xlsx --out results_1K137.json
    python analyze_tracking.py --mf4 misura_1K136.mf4 --xlsx Listasegnali.xlsx --out results_1K136.json

Se la misura e' splittata in zip, ricomporla/estrarla prima: serve il singolo `.mf4`.

## 3. Check di trasparenza (ISO 1K136)
    python compare_iso.py --test results_1K137.json --ref results_1K136.json --out results_iso.json

## 4. Excel di sintesi
    python export_excel.py --results results_iso.json --out Verifica_coppie.xlsx

## 5. Grafici, Excel, Word e PowerPoint
Una tantum: installare Node.js e, nella cartella `reporting/`, `npm install` (docx, pptxgenjs).

    python make_reports.py --mf4 misura_1K137.mf4 --results results_iso.json \
        --dbc-lookup dbc_lookup.json --label "Driving (SW 1K137)" --outdir output

Produce in `output/`: `cases/*.png` (overlay CAN vs SW per ogni KO/N-D), `Verifica_coppie.xlsx`,
`Rapporto_Inseguimento.docx`, `Presentazione_Inseguimento.pptx` (+ JSON intermedi e `stats.json`).
Tutti i numeri nei documenti sono calcolati da `stats.json`: non c'e' nulla di hard-coded sulla misura.

Script coinvolti (cartella `reporting/`): `gen_cases.py` (grafici + liste + statistiche), `report2.py` (Excel),
`build_doc.js` (Word), `build_ppt.js` (PowerPoint).

Limiti noti: le diciture «1K137» / «1K136» e il codice di stato `ISO_1K136` sono fissi nei testi; per altre versioni SW
sostituirli con un find/replace. In `report2.py` il dizionario `CATEG_OVERRIDE` contiene classificazioni manuali di
categoria divergenza per segnali specifici di questa lista: aggiornarlo se cambia la lista segnali.

## Regole implementate
- Griglia di confronto al cycle time del frame CAN (da DBC `GenMsgCycleTime`), campionamento step-hold.
- Tolleranza di ritardo ~20 ms: +-1 campione (frame >=20 ms), +-2 (10 ms), max 3.
- SW variable che non evolve mentre il segnale CAN evolve -> `SW_NOT_EVOLVING` (match nullo).
- Segnali discreti: OK >=97%, SUSPECT 85-97%, REMAP se mappa codici biunivoca >=97%, altrimenti MISMATCH.
- Segnali continui: OK se errore normalizzato <2% o corr >0.98; SUSPECT se corr >0.85 o errore <10%.
- Frame con `Ctrl_<FRAME>_<HEX>` = FALSE -> `CONFIG_EXCLUDED` (giustificato da config veicolo).
- `compare_iso.py`: deviazione presente anche nel riferimento -> `ISO_1K136`; se nel riferimento e' OK/REMAP
  resta reale con `only_in_test=True` (potenziale regressione).

Nota: il nome dei canali MF4 attesi e' `SEGNALE.MSG` / `CAN Monitoring:1.SEGNALE.MSG`; la risoluzione e' in `resolve_name()`.
