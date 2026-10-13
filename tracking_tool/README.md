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
