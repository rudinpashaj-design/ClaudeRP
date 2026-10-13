const pptxgen = require("pptxgenjs");
const fs = require("fs");
const S = JSON.parse(fs.readFileSync("stats.json", "utf8"));
const META = JSON.parse(fs.readFileSync("cases_meta.json", "utf8"));
const MEAS_LABEL = process.env.MEAS_LABEL || "Misura (SW 1K137)";
const OUT = process.env.OUT_PPTX || "Presentazione_Inseguimento.pptx";
const DOCX_NAME = process.env.OUT_DOCX || "Rapporto_Inseguimento.docx";
const XLSX_NAME = process.env.OUT_XLSX || "Verifica_coppie.xlsx";
const OK_TOT = S.ok + S.remap, GIUST = S.config + S.iso;
const p = new pptxgen(); p.layout = "LAYOUT_WIDE"; const W = 13.33, H = 7.5;
const NAVY="1E2761",ICE="CADCFC",WHITE="FFFFFF",INK="22262E",MUT="6B7280",LIGHT="F4F6FB",GREEN="2E7D32",RED="C0392B",ORANGE="E67E22",GREY="9AA0A6";
const HF="Cambria",BF="Calibri";
const bg=c=>({color:c});
const circle=(s,x,y,d,c)=>s.addShape(p.ShapeType.ellipse,{x,y,w:d,h:d,fill:{color:c},line:{type:"none"}});
const pn=(s,n)=>s.addText(String(n),{x:W-0.7,y:H-0.5,w:0.4,h:0.3,fontFace:BF,fontSize:10,color:MUT,align:"right"});
let s;

// S1
s=p.addSlide(); s.background=bg(NAVY); circle(s,-1.2,-1.2,3.2,"27306B"); circle(s,W-2,H-2,3.6,"27306B");
s.addText("RAPPORTO DI VERIFICA",{x:0.9,y:1.7,w:11,h:0.5,fontFace:BF,fontSize:16,color:ICE,charSpacing:3,bold:true});
s.addText("Inseguimento segnali CAN ↔ Sw Variable",{x:0.9,y:2.25,w:11.5,h:1.4,fontFace:HF,fontSize:40,color:WHITE,bold:true});
s.addText("Coincidenza tra segnali CAN e variabili interne CMM",{x:0.9,y:3.7,w:11,h:0.6,fontFace:BF,fontSize:18,color:ICE});
s.addText([{text:"Misura:  ",options:{bold:true,color:WHITE}},{text:`${MEAS_LABEL} (~${S.duration_min} min)`,options:{color:ICE}}],{x:0.9,y:5.5,w:11.5,h:0.4,fontFace:BF,fontSize:13});
s.addText([{text:"Database:  ",options:{bold:true,color:WHITE}},{text:"CAN HS1 / HS2",options:{color:ICE}}],{x:0.9,y:5.95,w:11.5,h:0.4,fontFace:BF,fontSize:13});

// S2 Attività
s=p.addSlide(); s.background=bg(WHITE);
s.addText("Attività di verifica",{x:0.7,y:0.5,w:9,h:0.7,fontFace:HF,fontSize:34,bold:true,color:NAVY});
s.addText([{text:"Obiettivo. ",options:{bold:true,color:NAVY}},{text:"Verificare che, per ogni coppia della lista segnali, il segnale su rete CAN e la variabile interna della CMM ",options:{color:INK}},{text:"«si inseguano»",options:{italic:true,bold:true}},{text:", cioè assumano lo stesso andamento nel tempo.",options:{color:INK}}],{x:0.7,y:1.4,w:7.2,h:1.6,fontFace:BF,fontSize:16,lineSpacing:24,valign:"top"});
s.addText("Verifica su misura di guida decodificando messaggi, unità, fattori di scala e value table dai DB CAN HS1/HS2, e tenendo conto della configurazione veicolo (Ctrl_).",{x:0.7,y:3.2,w:7.2,h:1.4,fontFace:BF,fontSize:15,color:INK,lineSpacing:22,valign:"top"});
const stat=(x,y,n,l)=>{s.addShape(p.ShapeType.roundRect,{x,y,w:2.35,h:1.55,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});s.addText(n,{x,y:y+0.18,w:2.35,h:0.8,fontFace:HF,fontSize:38,bold:true,color:NAVY,align:"center"});s.addText(l,{x:x+0.1,y:y+1.0,w:2.15,h:0.5,fontFace:BF,fontSize:12,color:MUT,align:"center"});};
stat(8.4,1.4,String(S.total),"coppie analizzate"); stat(10.78,1.4,`~${S.duration_min} min`,"durata misura"); stat(8.4,3.15,String(S.n_channels),"canali misura"); stat(10.78,3.15,"2","database CAN");
pn(s,2);

// S3 Metodo
s=p.addSlide(); s.background=bg(WHITE);
s.addText("Metodo",{x:0.7,y:0.5,w:9,h:0.7,fontFace:HF,fontSize:34,bold:true,color:NAVY});
[["01","Riferimento = cycle time del frame","Confronto su griglia al GenMsgCycleTime del frame CAN (step-hold), direzione RX/TX dal trasmettitore."],
 ["02","Regola «SW non evolve»","Variabile SW costante mentre il CAN evolve → match nullo (KO). Valutata sul grezzo, relativa alla magnitudine."],
 ["03","Tolleranza di ritardo","Match per-campione con budget ~20 ms: ±1 sample per frame ≥20 ms, ±2 a 10 ms (contatori/checksum)."],
 ["04","Config veicolo + soglie","Frame con Ctrl_ = FALSE → segnali giustificati. OK ≥ 97 % (discreti) / corr > 0.98 (continui)."]
].forEach(([n,t,d],i)=>{const y=1.45+i*1.4; circle(s,0.7,y,0.62,NAVY); s.addText(n,{x:0.7,y,w:0.62,h:0.62,fontFace:HF,fontSize:18,bold:true,color:WHITE,align:"center",valign:"middle"}); s.addText(t,{x:1.55,y:y-0.05,w:10.9,h:0.45,fontFace:BF,fontSize:17,bold:true,color:NAVY,valign:"middle"}); s.addText(d,{x:1.55,y:y+0.42,w:11,h:0.75,fontFace:BF,fontSize:13,color:INK,lineSpacing:17,valign:"top"});});
pn(s,3);

// S4 Risultati
s=p.addSlide(); s.background=bg(WHITE);
s.addText("Risultati complessivi",{x:0.7,y:0.5,w:9,h:0.7,fontFace:HF,fontSize:34,bold:true,color:NAVY});
const big=(x,n,l,c)=>{s.addShape(p.ShapeType.roundRect,{x,y:1.35,w:2.75,h:1.75,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});s.addText(n,{x,y:1.45,w:2.75,h:0.85,fontFace:HF,fontSize:42,bold:true,color:c,align:"center"});s.addText(l,{x:x+0.1,y:2.32,w:2.55,h:0.7,fontFace:BF,fontSize:12,color:MUT,align:"center",valign:"top"});};
big(0.7,String(OK_TOT),`OK — si inseguono\n(${S.ok} + ${S.remap} rimappate)`,GREEN); big(3.62,String(GIUST),`Giustificati\n(config ${S.config} + ISO ${S.iso})`,"2E5AA0"); big(6.54,String(S.real_ko),`KO reali\n(${S.only} solo 1K137 + ${S.noncomp} non confrontabili)`,RED); big(9.46,String(S.susp+S.nd),`Da verificare ${S.susp}\n+ N/D ${S.nd}`,GREY);
s.addChart(p.ChartType.doughnut,[{name:"Esiti",labels:["OK","Giust. config","Giust. ISO 1K136","KO reali","Da verificare","N/D"],values:[OK_TOT,S.config,S.iso,S.real_ko,S.susp,S.nd]}],{x:0.6,y:3.5,w:4.6,h:3.6,holeSize:55,chartColors:[GREEN,"2E5AA0","6FA84F",RED,ORANGE,GREY],showLegend:true,legendPos:"r",legendFontSize:10,legendFontFace:BF,showTitle:false});
s.addShape(p.ShapeType.roundRect,{x:6.0,y:3.6,w:6.7,h:3.35,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});
s.addText("In sintesi",{x:6.3,y:3.8,w:6.1,h:0.4,fontFace:BF,fontSize:16,bold:true,color:NAVY});
s.addText([{text:`${OK_TOT} coppie si inseguono correttamente (${S.ok} + ${S.remap} rimappate).`,options:{bullet:true,breakLine:true}},{text:`${GIUST} giustificate: ${S.config} config veicolo + ${S.iso} «Comportamento ISO 1K136» (check di trasparenza).`,options:{bullet:true,breakLine:true}},{text:`${S.real_ko} deviazioni reali: ${S.only} presenti solo nel 1K137 (potenziali regressioni) + ${S.noncomp} non confrontabili con il 1K136.`,options:{bullet:true,breakLine:true}},{text:`${S.susp} da verificare (contatori borderline) e ${S.nd} N/D.`,options:{bullet:true}}],{x:6.3,y:4.3,w:6.1,h:2.5,fontFace:BF,fontSize:13.5,color:INK,paraSpaceAfter:9,lineSpacing:18,valign:"top"});
pn(s,4);

// S5 Dalle deviazioni alla giustificazione
s=p.addSlide(); s.background=bg(WHITE);
s.addText("Dalle deviazioni alla giustificazione",{x:0.7,y:0.5,w:12,h:0.7,fontFace:HF,fontSize:32,bold:true,color:NAVY});
s.addText(`Come le ${S.dev_raw} deviazioni grezze si riducono a ${S.real_ko} deviazioni reali`,{x:0.7,y:1.2,w:12,h:0.4,fontFace:BF,fontSize:14,italic:true,color:MUT});
const fun=[[String(S.dev_raw),"Deviazioni grezze","Divergenze e SW-non-evolve rilevate sulla misura 1K137",NAVY],
 ["−"+S.iso,"Giustificate ISO 1K136","Stesso comportamento anche con la SW precedente 1K136: non regressioni","6FA84F"],
 [String(S.real_ko),"Deviazioni reali",`${S.only} presenti solo nel 1K137 (potenziali regressioni) + ${S.noncomp} non confrontabili con il 1K136`,RED]];
let fy=1.85;
fun.forEach((c,i)=>{const w=12.0-i*2.6,x=0.7+i*1.3; s.addShape(p.ShapeType.roundRect,{x,y:fy,w,h:1.45,rectRadius:0.08,fill:{color:c[3]},line:{type:"none"}}); s.addText(c[0],{x:x+0.3,y:fy+0.15,w:2.2,h:1.15,fontFace:HF,fontSize:40,bold:true,color:WHITE,align:"left",valign:"middle"}); s.addText([{text:c[1]+"\n",options:{bold:true,fontSize:17,color:WHITE}},{text:c[2],options:{fontSize:12.5,color:WHITE}}],{x:x+2.5,y:fy+0.1,w:w-2.8,h:1.25,fontFace:BF,valign:"middle",lineSpacing:16}); fy+=1.7;});
pn(s,5);

// Focus
function focus(title,tag,tagcol,img,pts,n){const s=p.addSlide();s.background=bg(WHITE);s.addText(title,{x:0.7,y:0.5,w:11.5,h:0.7,fontFace:HF,fontSize:30,bold:true,color:NAVY});s.addShape(p.ShapeType.roundRect,{x:0.7,y:1.35,w:2.8,h:0.5,rectRadius:0.25,fill:{color:tagcol},line:{type:"none"}});s.addText(tag,{x:0.7,y:1.35,w:2.8,h:0.5,fontFace:BF,fontSize:12.5,bold:true,color:WHITE,align:"center",valign:"middle"});s.addImage({path:img,x:0.7,y:2.15,w:7.9,h:3.3});s.addText("CAN (blu) vs SW (rosso)",{x:0.7,y:5.5,w:7.9,h:0.35,fontFace:BF,fontSize:11,italic:true,color:MUT,align:"center"});s.addShape(p.ShapeType.roundRect,{x:8.85,y:2.15,w:3.8,h:3.85,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});s.addText(pts.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<pts.length-1}})),{x:9.1,y:2.45,w:3.35,h:3.35,fontFace:BF,fontSize:13.5,color:INK,paraSpaceAfter:10,lineSpacing:19,valign:"top"});pn(s,n);}
const onlyL = JSON.parse(fs.readFileSync("only1k137_list.json", "utf8"));
const onlySet = new Set(onlyL.map(o => o.sig));
const caseOnly = META.find(m => onlySet.has(m.signal) && m.img);
const caseOther = META.find(m => !onlySet.has(m.signal) && (m.status === "MISMATCH" || m.status === "SW_NOT_EVOLVING") && m.img);
const cut = t => (t && t.length > 170) ? t.slice(0, 167) + "…" : t;
let nslide = 6;
if (caseOnly) focus("Focus — deviazione solo in 1K137", "KO · potenziale regressione", RED, caseOnly.img,
  [`${caseOnly.signal} ↔ ${caseOnly.sw}`, cut(caseOnly.descrizione), "Nel 1K136 lo stesso segnale insegue correttamente: possibile regressione introdotta dalla nuova versione.", `Uno dei ${S.only} casi «solo 1K137».`], nslide++);
if (caseOther) focus("Focus — deviazione non confrontabile con 1K136", "KO · da analizzare", ORANGE, caseOther.img,
  [`${caseOther.signal} ↔ ${caseOther.sw}`, cut(caseOther.descrizione), cut(caseOther.disp_reason || ""), "Nessun confronto utile con la misura 1K136."].filter(Boolean), nslide++);

// S8 Trasparenza 1K136
const only=onlyL;
s=p.addSlide(); s.background=bg(WHITE);
s.addText("Check di trasparenza — SW 1K137 vs 1K136",{x:0.7,y:0.5,w:12,h:0.7,fontFace:HF,fontSize:30,bold:true,color:NAVY});
s.addText("Le deviazioni con lo stesso comportamento in 1K136 sono giustificate come «Comportamento ISO 1K136» (non regressioni)",{x:0.7,y:1.2,w:12,h:0.4,fontFace:BF,fontSize:13,italic:true,color:MUT});
s.addShape(p.ShapeType.roundRect,{x:0.7,y:1.75,w:3.6,h:2.0,rectRadius:0.08,fill:{color:"E8F5E9"},line:{type:"none"}});
s.addText(String(S.iso),{x:0.7,y:1.9,w:3.6,h:1.0,fontFace:HF,fontSize:46,bold:true,color:"2E7D32",align:"center"});
s.addText("deviazioni ISO 1K136\n(giustificate)",{x:0.85,y:2.9,w:3.3,h:0.7,fontFace:BF,fontSize:12.5,color:INK,align:"center",valign:"top"});
s.addShape(p.ShapeType.roundRect,{x:4.5,y:1.75,w:3.6,h:2.0,rectRadius:0.08,fill:{color:"FBE9EA"},line:{type:"none"}});
s.addText(String(S.real_ko),{x:4.5,y:1.9,w:3.6,h:1.0,fontFace:HF,fontSize:46,bold:true,color:RED,align:"center"});
s.addText(`deviazioni reali\n(${S.only} solo 1K137 + ${S.noncomp} non confrontabili)`,{x:4.65,y:2.9,w:3.3,h:0.7,fontFace:BF,fontSize:12.5,color:INK,align:"center",valign:"top"});
s.addShape(p.ShapeType.roundRect,{x:8.3,y:1.75,w:4.35,h:2.0,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});
s.addText("Regola",{x:8.55,y:1.9,w:3.9,h:0.35,fontFace:BF,fontSize:14,bold:true,color:NAVY});
s.addText("Stessa deviazione anche in 1K136 → ISO (giustificata). Deviazione solo in 1K137 → resta reale (potenziale regressione).",{x:8.55,y:2.3,w:3.9,h:1.35,fontFace:BF,fontSize:12.5,color:INK,lineSpacing:16,valign:"top"});
s.addText("Deviazioni presenti SOLO nel 1K137 (potenziali regressioni)",{x:0.7,y:4.0,w:12,h:0.4,fontFace:BF,fontSize:15,bold:true,color:RED});
const rows=[["Signal Name","Sw Variable","Messaggio","Tipo"]].concat(only.map(o=>[o.sig,o.sw,o.msg,o.st==="SW_NOT_EVOLVING"?"SW non evolve":"divergenza"]));
s.addTable(rows.map((r,ri)=>r.map(c=>({text:String(c),options:{bold:ri===0,color:ri===0?"FFFFFF":INK,fill:{color:ri===0?"C0392B":(ri%2?"FBE9EA":"FFFFFF")},fontSize:12,fontFace:BF,align:"left",margin:2}}))),{x:0.7,y:4.45,w:11.95,colW:[3.4,3.4,2.6,2.55],rowH:0.34,border:{type:"solid",color:"E0E0E0",pt:0.5},valign:"middle"});
pn(s,nslide++);

// S9 N/D + da verificare
s=p.addSlide(); s.background=bg(WHITE);
s.addText("Casi N/D e da verificare",{x:0.7,y:0.5,w:11.5,h:0.7,fontFace:HF,fontSize:32,bold:true,color:NAVY});
const nd=(x,num,lab,sub,col)=>{s.addShape(p.ShapeType.roundRect,{x,y:1.6,w:3.75,h:2.5,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});s.addText(num,{x,y:1.8,w:3.75,h:0.9,fontFace:HF,fontSize:44,bold:true,color:col,align:"center"});s.addText(lab,{x:x+0.2,y:2.7,w:3.35,h:0.5,fontFace:BF,fontSize:14,bold:true,color:NAVY,align:"center"});s.addText(sub,{x:x+0.2,y:3.15,w:3.35,h:0.85,fontFace:BF,fontSize:11.5,color:INK,align:"center",valign:"top"});};
nd(0.7,String(S.susp),"Da verificare","Contatori/checksum al limite (96–97%) e segnali lenti: di fatto inseguono.","B8860B");
nd(4.75,String(S.nd_sig),"N/D — non trasmesso","Segnali CAN non presenti nella misura di guida (da chiarire con cliente).","9AA0A6");
nd(8.8,String(S.nd_sw+S.nd_ovl),"N/D — altro",`${S.nd_sw} variabili SW da configurare (A2L) + ${S.nd_ovl} senza overlap temporale.`,"9AA0A6");
s.addShape(p.ShapeType.roundRect,{x:0.7,y:4.5,w:11.95,h:2.2,rectRadius:0.08,fill:{color:LIGHT},line:{type:"none"}});
s.addText("Note",{x:0.95,y:4.65,w:11.4,h:0.4,fontFace:BF,fontSize:15,bold:true,color:NAVY});
s.addText([{text:`I ${S.susp} «da verificare» sono contatori/checksum appena sotto soglia (jitter di misura) e segnali continui lenti: non deviazioni certe.`,options:{bullet:true,breakLine:true}},{text:"I casi N/D non implicano di per sé un difetto: indicano che il confronto non è eseguibile su questa misura.",options:{bullet:true}}],{x:0.95,y:5.1,w:11.45,h:1.5,fontFace:BF,fontSize:13.5,color:INK,paraSpaceAfter:9,lineSpacing:18,valign:"top"});
pn(s,nslide++);

// S10 Conclusioni
s=p.addSlide(); s.background=bg(NAVY); circle(s,W-2.4,-1,3.4,"27306B");
s.addText("Conclusioni e prossimi passi",{x:0.9,y:0.9,w:11,h:0.8,fontFace:HF,fontSize:34,bold:true,color:WHITE});
s.addText([{text:`${OK_TOT} coppie su ${S.total} si inseguono correttamente (${S.ok} + ${S.remap} rimappate).`,options:{bullet:true,breakLine:true}},{text:`${GIUST} giustificate: ${S.config} da configurazione veicolo + ${S.iso} «Comportamento ISO 1K136» (check di trasparenza vs SW precedente).`,options:{bullet:true,breakLine:true}},{text:`Solo ${S.real_ko} deviazioni reali: ${S.only} presenti unicamente nel 1K137 (potenziali regressioni) + ${S.noncomp} non confrontabili con il 1K136.`,options:{bullet:true,breakLine:true}},{text:`${S.susp} da verificare (contatori borderline) e ${S.nd} N/D non confrontabili su questa misura.`,options:{bullet:true,breakLine:true}},{text:`Prossimi passi: verifica prioritaria delle ${S.only} deviazioni solo-1K137, analisi delle restanti deviazioni reali, chiarimento dei N/D.`,options:{bullet:true}}],{x:0.9,y:2.0,w:11.4,h:4.3,fontFace:BF,fontSize:16,color:ICE,paraSpaceAfter:12,lineSpacing:22});
s.addText(`Documento: ${DOCX_NAME}  ·  Report: ${XLSX_NAME}`,{x:0.9,y:6.8,w:11.5,h:0.4,fontFace:BF,fontSize:12,italic:true,color:ICE});

p.writeFile({fileName:OUT}).then(()=>console.log("Saved:",OUT));
