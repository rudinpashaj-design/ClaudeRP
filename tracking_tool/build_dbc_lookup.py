import warnings; warnings.filterwarnings("ignore")
from canmatrix import formats
import json
lookup={}
import argparse
ap = argparse.ArgumentParser(description="Costruisce dbc_lookup.json dai DBC (restano locali)")
ap.add_argument("--hs1", required=True)
ap.add_argument("--hs2", required=True)
ap.add_argument("--out", default="dbc_lookup.json")
args = ap.parse_args()
for tag,path in [("HS1",args.hs1),("HS2",args.hs2)]:
    db=formats.loadp_flat(path)
    for f in db.frames:
        tx=list(f.transmitters) if f.transmitters else []
        try: ct=int(f.attribute("GenMsgCycleTime") or 0)
        except: ct=0
        cmm="CMM" in tx
        for s in f.signals:
            vt={str(int(k)):str(v) for k,v in (s.values or {}).items()}
            lookup[s.name]={"bus":tag,"msg":f.name,
                "msg_id":hex(f.arbitration_id.id) if hasattr(f.arbitration_id,'id') else str(f.arbitration_id),
                "tx":",".join(tx),"cycle_ms":ct,"cmm_dir":"TX" if cmm else "RX",
                "factor":float(s.factor),"offset":float(s.offset),"unit":s.unit or "",
                "min":float(s.min) if s.min is not None else None,
                "max":float(s.max) if s.max is not None else None,"values":vt}
json.dump(lookup,open(args.out,"w"),indent=1,ensure_ascii=False)
print("Segnali nel lookup:",len(lookup))
