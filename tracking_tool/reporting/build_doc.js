const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun,
  Table, TableRow, TableCell, WidthType, ShadingType, PageBreak, TableOfContents } = require("docx");

const meta = JSON.parse(fs.readFileSync("cases_meta.json", "utf8"));
const S = JSON.parse(fs.readFileSync("stats.json", "utf8"));
const MEAS_LABEL = process.env.MEAS_LABEL || "Misura (SW 1K137)";
const OUT_DOCX = process.env.OUT_DOCX || "Rapporto_Inseguimento.docx";
const OK_TOT = S.ok + S.remap;
const IMGW = 600;
const heading = (t, l) => new Paragraph({ heading: l, spacing: { before: 220, after: 120 }, children: [new TextRun(t)] });
const P = (t, o = {}) => new Paragraph({ alignment: o.al || AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 120 }, children: [new TextRun({ text: t, size: o.size || 20, bold: o.bold, italics: o.it, color: o.color })] });

function infoLine(m) {
  const b = [];
  if (m.bus) b.push(`Bus ${m.bus}`); if (m.msg) b.push(`Msg ${m.msg}`);
  if (m.cmm_dir) b.push(`CMM ${m.cmm_dir}`); if (m.cycle_ms !== "" && m.cycle_ms != null) b.push(`Cycle ${m.cycle_ms} ms`);
  return new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: b.join("   ·   "), italics: true, size: 16, color: "555555" })] });
}
function caseBlock(m) {
  const out = [];
  out.push(new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 200, after: 50 }, children: [new TextRun(`${String(m.idx).padStart(2, "0")}. ${m.signal}  ↔  ${m.sw}`)] }));
  out.push(new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "Analisi in prima battuta: " + m.titolo, bold: true, color: "555555", size: 20 })] }));
  out.push(new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: m.disp, bold: true, color: m.disp_color || "1F3864", size: 20 })] }));
  if (m.disp_reason) out.push(P(m.disp_reason, { it: true, size: 19, color: "444444", after: 60 }));
  out.push(infoLine(m));
  out.push(P(m.descrizione, { size: 20, after: 100 }));
  const buf = fs.readFileSync(m.img); const h = Math.round(IMGW * (m.img_h / m.img_w));
  out.push(new Paragraph({ spacing: { after: 200 }, children: [new ImageRun({ type: "png", data: buf, transformation: { width: IMGW, height: h } })] }));
  return out;
}
function compact(sig, sw, dispBold, dispColor, reason, initial) {
  return [
    new Paragraph({ spacing: { before: 90, after: 20 }, children: [new TextRun({ text: `${sig}  ↔  ${sw}`, bold: true, size: 19 })] }),
    new Paragraph({ spacing: { after: 8 }, children: [new TextRun({ text: dispBold, bold: true, color: dispColor, size: 18 })] }),
    new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: 20 }, children: [
      new TextRun({ text: initial ? `Analisi in prima battuta: ${initial}. ` : "", italics: true, color: "666666", size: 17 }),
      new TextRun({ text: reason, size: 18 })] }),
  ];
}

function summaryTable() {
  const rows = [["Esito", "N. coppie"],
    ["OK – si inseguono", String(S.ok)], ["OK con rimappatura", String(S.remap)],
    ["Giustificato – config veicolo (frame escluso)", String(S.config)],
    ["Giustificato – Comportamento ISO 1K136", String(S.iso)],
    ["Da verificare (contatori/segnali borderline)", String(S.susp)],
    ["KO – divergenza", String(S.mm)], ["KO – SW non evolve", String(S.swne)],
    ["N/D – segnale CAN non trasmesso", String(S.nd_sig)], ["N/D – variabile SW assente", String(S.nd_sw)],
    ["N/D – nessun overlap temporale", String(S.nd_ovl)], ["TOTALE", String(S.total)]];
  return new Table({ columnWidths: [6400, 2000], width: { size: 8400, type: WidthType.DXA },
    rows: rows.map((r, i) => new TableRow({ children: r.map((c, j) => new TableCell({
      width: { size: j === 0 ? 6400 : 2000, type: WidthType.DXA },
      shading: i === 0 ? { type: ShadingType.CLEAR, fill: "4472C4" } : (i === rows.length - 1 ? { type: ShadingType.CLEAR, fill: "D9E1F2" } : undefined),
      children: [new Paragraph({ children: [new TextRun({ text: c, bold: i === 0 || i === rows.length - 1, color: i === 0 ? "FFFFFF" : "000000", size: 18 })] })] })) })) });
}

const body = [];
body.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: "Verifica coppie Signal Name / Sw Variable", bold: true, size: 40, color: "1F3864" })] }));
body.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: "Inseguimento segnali CAN ↔ variabili interne CMM", size: 24, color: "555555" })] }));
body.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 }, children: [new TextRun({ text: `Misura: ${MEAS_LABEL}  ·  DB CAN HS1/HS2`, italics: true, size: 18, color: "777777" })] }));
body.push(heading("Indice", HeadingLevel.HEADING_1));
body.push(new TableOfContents("Sommario", { hyperlink: true, headingStyleRange: "1-3" }));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(heading("1. Attività di verifica", HeadingLevel.HEADING_1));
body.push(P(`L'attività verifica che, per ogni coppia della lista segnali (Signal Name / Sw Variable), il segnale su rete CAN e la corrispondente variabile interna della centralina CMM «si inseguano», ossia assumano lo stesso andamento nel tempo. La verifica è condotta sulla misura ${MEAS_LABEL} (~${S.duration_min} minuti), usando i database CAN HS1 e HS2 per decodificare messaggi, unità, fattori di scala e tabelle di valori.`));
body.push(P(`Sono state analizzate ${S.total} coppie. L'analisi tiene conto della configurazione veicolo tramite le variabili interne Ctrl_<FRAME>_<IDhex> (frame con Ctrl = FALSE → segnali esclusi dall'acquisizione, giustificati) e di un check di trasparenza rispetto alla versione software precedente 1K136 (misura Diagnostic_checkCAN_Reference_1K136): le deviazioni che si comportano allo stesso modo in 1K136 sono giustificate come «Comportamento ISO 1K136» (cap. 5), non essendo regressioni del 1K137.`));

body.push(heading("2. Metodo", HeadingLevel.HEADING_1));
[["2.1 Riferimento temporale (cycle time del frame)", "Confronto su griglia uniforme al cycle time del frame CAN (GenMsgCycleTime da DBC), con campionamento step-hold. Direzione RX/TX dedotta dal nodo trasmettitore del frame."],
 ["2.2 Regola «SW non evolve»", "Se la variabile interna resta costante mentre il segnale CAN evolve, il match è nullo (KO dedicato). L'evoluzione è valutata sul segnale grezzo, relativa alla magnitudine (i sentinel grandi come 2^31/65535 sono riconosciuti come fermi)."],
 ["2.3 Tolleranza di ritardo (contatori/checksum)", "Match per-campione con tolleranza pari a un budget di tempo fisso (~20 ms): ±1 campione per frame ≥20 ms, ±2 a 10 ms."],
 ["2.4 Configurazione veicolo (Ctrl_)", "Per ogni frame si legge la variabile Ctrl_. Se FALSE, il frame e tutti i suoi segnali sono esclusi dall'acquisizione: assenza o mancata evoluzione sono giustificate."],
 ["2.5 Soglie di esito", "Discreti: OK se match ≥ 97 %, DA VERIFICARE 85–97 %, altrimenti KO. Continui: OK se errore normalizzato < 2 % o correlazione > 0.98, DA VERIFICARE se corr > 0.85 o errore < 10 %, altrimenti KO. REMAP: andamento coerente ma codifica/fase diversa."]
].forEach(([h, t]) => { body.push(heading(h, HeadingLevel.HEADING_2)); body.push(P(t)); });

body.push(heading("3. Risultati complessivi", HeadingLevel.HEADING_1));
body.push(summaryTable());
body.push(P(`Su ${S.total} coppie, ${OK_TOT} si inseguono correttamente (${S.ok} dirette + ${S.remap} con rimappatura), ${S.config} sono giustificate dalla configurazione veicolo e ${S.iso} come «Comportamento ISO 1K136» (deviazioni presenti in modo identico anche con la SW precedente, cap. 5). Restano ${S.real_ko} deviazioni reali (${S.mm} divergenze + ${S.swne} SW non evolve), di cui ${S.only} presenti solo nel 1K137 (potenziali regressioni), oltre a ${S.susp} casi borderline da verificare e ${S.nd} casi N/D. Il capitolo 4 riporta il dettaglio con l'esito finale di ciascun caso; l'elenco completo delle coppie OK è in Appendice A.`, { after: 120 }));
body.push(new Paragraph({ children: [new PageBreak()] }));

body.push(heading("4. Dettaglio dei casi rilevati in prima battuta come KO o N/D", HeadingLevel.HEADING_1));
body.push(P("Per ogni caso è indicato l'esito finale: deviazione reale (da correggere), giustificato (con motivazione) o N/D da chiarire.", { after: 120 }));

body.push(heading(`4.1 Deviazioni reali — divergenza (${S.mm})`, HeadingLevel.HEADING_2));
meta.filter(m => m.status === "MISMATCH").forEach(m => caseBlock(m).forEach(x => body.push(x)));
body.push(heading(`4.2 Deviazioni reali — SW non evolve (${S.swne})`, HeadingLevel.HEADING_2));
meta.filter(m => m.status === "SW_NOT_EVOLVING").forEach(m => caseBlock(m).forEach(x => body.push(x)));

// 4.3 config compact
const ce = JSON.parse(fs.readFileSync("config_list.json", "utf8"));
body.push(heading(`4.3 Casi giustificati dalla configurazione veicolo (${S.config})`, HeadingLevel.HEADING_2));
body.push(P("Coppie appartenenti a frame esclusi dalla configurazione veicolo (Ctrl_ = FALSE): assenza del segnale o mancata evoluzione della variabile SW giustificate.", { after: 100 }));
ce.forEach(o => compact(o.sig, o.sw, `ESITO FINALE: GIUSTIFICATO — configurazione veicolo (frame ${o.hex})`, "1F4E79",
  `Il frame ${o.hex}${o.msg ? " (" + o.msg + ")" : ""} è escluso dall'acquisizione (Ctrl = FALSE): ${o.prev} è coerente con la configurazione, non è un difetto.`, o.prev).forEach(x => body.push(x)));

// 4.4 ISO 1K136 compact
const isoL = JSON.parse(fs.readFileSync("iso_list.json", "utf8"));
body.push(heading(`4.4 Deviazioni giustificate «Comportamento ISO 1K136» (${S.iso})`, HeadingLevel.HEADING_2));
body.push(P("Deviazioni rilevate nel 1K137 che si comportano in modo identico anche con la SW precedente 1K136 (stessa deviazione): non sono regressioni introdotte dal 1K137. Dettaglio del confronto nel capitolo 5.", { after: 100 }));
isoL.forEach(o => compact(o.sig, o.sw, "ESITO FINALE: GIUSTIFICATO — Comportamento ISO 1K136", "1F6B2E",
  `Deviazione (${o.dev}) presente in modo identico anche nella misura con SW 1K136 → comportamento invariato, non è una regressione del 1K137.`, `${o.dev}${o.msg ? ", frame " + o.msg : ""}`).forEach(x => body.push(x)));

// 4.5/4.6/4.7 N/D
body.push(new Paragraph({ children: [new PageBreak()] }));
body.push(heading(`4.5 Casi N/D — segnale CAN non trasmesso (${S.nd_sig})`, HeadingLevel.HEADING_2));
meta.filter(m => m.status === "NO_DATA_SIGNAL").forEach(m => caseBlock(m).forEach(x => body.push(x)));
body.push(heading(`4.6 Casi N/D — variabile SW assente (${S.nd_sw})`, HeadingLevel.HEADING_2));
meta.filter(m => m.status === "MISSING_SWVAR").forEach(m => caseBlock(m).forEach(x => body.push(x)));
const ovl = meta.filter(m => m.status === "NO_OVERLAP");
if (ovl.length) { body.push(heading(`4.7 Casi N/D — nessun overlap temporale (${S.nd_ovl})`, HeadingLevel.HEADING_2)); ovl.forEach(m => caseBlock(m).forEach(x => body.push(x))); }

// 4.8 suspect
const su = JSON.parse(fs.readFileSync("suspect_list.json", "utf8"));
body.push(heading(`4.8 Casi da verificare (${S.susp})`, HeadingLevel.HEADING_2));
body.push(P("Casi borderline: contatori/checksum appena sotto la soglia del 97 % (di fatto si inseguono, con jitter di misura) e segnali continui lenti la cui correlazione non è significativa nella finestra di guida. Da confermare, non deviazioni certe.", { after: 100 }));
su.forEach(o => {
  const isc = o.kind === "disc";
  const reason = isc ? `Contatore/checksum a ${o.m} (frame ${o.msg}, ${o.cyc} ms): appena sotto soglia, sostanzialmente inseguente.` : `Segnale continuo lento (frame ${o.msg}, ${o.cyc} ms): ${o.m}, correlazione poco significativa nella misura.`;
  compact(o.sig, o.sw, "ESITO FINALE: DA VERIFICARE", "B8860B", reason, "").forEach(x => body.push(x));
});

// 5. Transparency check vs 1K136
const only = JSON.parse(fs.readFileSync("only1k137_list.json", "utf8"));
body.push(new Paragraph({ children: [new PageBreak()] }));
body.push(heading("5. Check di trasparenza — confronto con SW 1K136", HeadingLevel.HEADING_1));
body.push(P("Le deviazioni rilevate nell'analisi del SW 1K137 sono state riconfrontate con la misura registrata con la versione software precedente 1K136 (Diagnostic_checkCAN_Reference_1K136), eseguendo su di essa la stessa identica pipeline di inseguimento segnali."));
body.push(P("Regola applicata: se una deviazione del 1K137 si comporta in modo simile anche nel 1K136 (stessa deviazione), è giustificata come «Comportamento ISO 1K136» — non è una regressione introdotta dalla nuova versione. Se invece la deviazione è presente solo nel 1K137 (nel 1K136 il segnale insegue), resta una deviazione reale e rappresenta una potenziale regressione."));
body.push(P(`Esito del confronto: delle ${S.dev_raw} deviazioni del 1K137, ${S.iso} risultano «Comportamento ISO 1K136» (elencate al § 4.4) e ${S.real_ko} restano deviazioni reali: ${S.only} presenti solo nel 1K137 e ${S.noncomp} non confrontabili con il 1K136 (nessun dato utile nella misura di riferimento).`, { after: 120 }));
body.push(P("Deviazioni presenti SOLO nel 1K137 (potenziali regressioni, priorità di verifica):", { bold: true, after: 60 }));
const olCols = [3600, 3600, 2200, 2200];
const olHead = ["Signal Name (CAN)", "Sw Variable", "Messaggio", "Tipo deviazione 1K137"];
const olRows = [new TableRow({ tableHeader: true, children: olHead.map((c, j) => new TableCell({ width: { size: olCols[j], type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, fill: "C0392B" }, children: [new Paragraph({ children: [new TextRun({ text: c, bold: true, color: "FFFFFF", size: 15 })] })] })) })];
only.forEach((o, i) => { const cells = [o.sig, o.sw, o.msg, o.st === "SW_NOT_EVOLVING" ? "SW non evolve" : "divergenza"];
  olRows.push(new TableRow({ children: cells.map((c, j) => new TableCell({ width: { size: olCols[j], type: WidthType.DXA }, shading: i % 2 ? { type: ShadingType.CLEAR, fill: "FBE9EA" } : undefined, children: [new Paragraph({ children: [new TextRun({ text: String(c), size: 15 })] })] })) })); });
body.push(new Table({ columnWidths: olCols, width: { size: olCols.reduce((a, b) => a + b, 0), type: WidthType.DXA }, rows: olRows }));
body.push(P((S.noncomp > 0 ? `A queste si aggiungono ${S.noncomp} deviazioni non confrontabili con il 1K136 in questa misura. ` : "") + "Il confronto completo pair-per-pair è disponibile nel report Excel.", { after: 120 }));

// Appendix
const ok = JSON.parse(fs.readFileSync("ok_list.json", "utf8"));
body.push(new Paragraph({ children: [new PageBreak()] }));
body.push(heading(`Appendice A — Elenco completo delle coppie OK (${OK_TOT})`, HeadingLevel.HEADING_1));
const okCols = [3300, 3300, 700, 2000, 700, 700, 800];
const okHead = ["Signal Name (CAN)", "Sw Variable", "Bus", "Messaggio", "Dir", "ms", "Match"];
const okRows = [new TableRow({ tableHeader: true, children: okHead.map((c, j) => new TableCell({ width: { size: okCols[j], type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, fill: "4472C4" }, children: [new Paragraph({ children: [new TextRun({ text: c, bold: true, color: "FFFFFF", size: 15 })] })] })) })];
ok.forEach((o, i) => { const cells = [o.sig, o.sw, o.bus, o.msg, o.dir, String(o.cyc ?? ""), o.m + (o.remap ? " (remap)" : "")];
  okRows.push(new TableRow({ children: cells.map((c, j) => new TableCell({ width: { size: okCols[j], type: WidthType.DXA }, shading: i % 2 ? { type: ShadingType.CLEAR, fill: "EEF2FA" } : undefined, children: [new Paragraph({ children: [new TextRun({ text: c, size: 14 })] })] })) })); });
body.push(new Table({ columnWidths: okCols, width: { size: okCols.reduce((a, b) => a + b, 0), type: WidthType.DXA }, rows: okRows }));

const doc = new Document({ styles: { default: { document: { run: { font: "Calibri", size: 20 } } } },
  sections: [{ properties: { page: { margin: { top: 1000, bottom: 1000, left: 1000, right: 1000 } } }, children: body }] });
Packer.toBuffer(doc).then(b => { const out = OUT_DOCX; fs.writeFileSync(out, b); console.log("Saved:", out, "(" + Math.round(b.length / 1024) + " KB)"); });
