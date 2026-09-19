window.ASTRA_INTERPRET=(()=>{
const sign={
"Carneiro":"energia direta, iniciativa e coragem para começar",
"Touro":"estabilidade, sensualidade e necessidade de segurança",
"Gémeos":"curiosidade, comunicação e versatilidade",
"Caranguejo":"sensibilidade, proteção e ligação emocional",
"Leão":"expressão, criatividade e desejo de reconhecimento",
"Virgem":"análise, organização e atenção ao detalhe",
"Balança":"harmonia, diplomacia e procura de equilíbrio",
"Escorpião":"intensidade, profundidade e transformação",
"Sagitário":"expansão, franqueza e procura de significado",
"Capricórnio":"disciplina, ambição e construção a longo prazo",
"Aquário":"independência, originalidade e visão de futuro",
"Peixes":"intuição, empatia e imaginação"
};
const planet={
"Sol":"A tua identidade tende a expressar-se através de",
"Lua":"Emocionalmente, procuras",
"Mercúrio":"A tua forma de pensar e comunicar revela",
"Vénus":"No amor e nos afetos valorizas",
"Marte":"A tua maneira de agir e afirmar vontade mostra",
"Júpiter":"O teu crescimento pessoal é favorecido por",
"Saturno":"As tuas grandes aprendizagens envolvem",
"Urano":"A tua necessidade de liberdade manifesta",
"Neptuno":"A tua imaginação e sensibilidade ligam-se a",
"Plutão":"Os teus processos de transformação passam por"
};
const aspect={
"Conjunção":"Estas duas energias atuam muito próximas e tendem a intensificar-se mutuamente.",
"Sextil":"Existe facilidade de cooperação entre estas áreas, sobretudo quando tomas iniciativa.",
"Quadratura":"Existe tensão criativa entre estas energias; pede consciência e ajustamento.",
"Trígono":"Há uma fluidez natural entre estas energias e talentos que podem surgir com facilidade.",
"Oposição":"Estas energias puxam em direções diferentes e convidam à procura de equilíbrio."
};
function build(r){
 let items=Object.entries(r.planets||{}).map(([n,p])=>({title:`${p.glyph} ${n} em ${p.name}`,text:`${planet[n]||"Esta energia expressa"} ${sign[p.name]||p.name}.`}));
 let angles=[];
 if(r.ascendant)angles.push({title:`↗ Ascendente em ${r.ascendant.name}`,text:`A forma como te apresentas ao mundo tende a transmitir ${sign[r.ascendant.name]}.`});
 if(r.mc)angles.push({title:`✦ Meio do Céu em ${r.mc.name}`,text:`Na direção profissional e pública, destacam-se temas de ${sign[r.mc.name]}.`});
 let aspects=(r.aspects||[]).slice().sort((a,b)=>a.orb-b.orb).slice(0,8).map(a=>({title:`${a.glyph} ${a.a} — ${a.b}`,text:aspect[a.type]+` Orbe ${a.orb.toFixed(1)}°.`}));
 return {items,angles,aspects};
}
return {build};
})();