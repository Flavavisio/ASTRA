(()=>{
const sb=window.supabaseClient,$=id=>document.getElementById(id);
const IMG="https://raw.githubusercontent.com/SONDLecT/woodcut-tarot/master/colori/";
const majors=[
["major-00","O Louco","00-fool.svg","liberdade, movimento e abertura ao desconhecido","A tua pergunta pode estar a pedir menos controlo e mais disponibilidade para explorar um caminho novo.","Avança com curiosidade, mas leva contigo consciência dos riscos e dos limites."],
["major-01","O Mago","01-magician.svg","iniciativa, capacidade e começo","Existe margem para agir com os recursos que já tens. A resposta depende mais da iniciativa do que da espera.","Escolhe um primeiro passo concreto e testa-o."],
["major-02","A Papisa","02-high-priestess.svg","intuição, silêncio e conhecimento interior","Nem toda a resposta precisa de ser imediata. Há informação, sensação ou contexto que ainda merece ser observado.","Escuta antes de decidir e evita forçar uma conclusão."],
["major-03","A Imperatriz","03-empress.svg","criatividade, expressão e crescimento","A pergunta ganha força quando há espaço para comunicar, criar e fazer algo crescer de forma natural.","Nutre a ideia ou relação com presença e consistência."],
["major-04","O Imperador","04-emperor.svg","estrutura, estabilidade e autoridade","A situação pede organização, limites claros e uma base sólida antes de avançar.","Define regras, prioridades e responsabilidades."],
["major-05","O Papa","05-pope.svg","orientação, tradição e aprendizagem","Pode ser útil procurar experiência, conselho ou uma estrutura já testada em vez de resolver tudo sozinho.","Aprende com quem conhece o caminho, mantendo o teu próprio critério."],
["major-06","Os Enamorados","06-lovers.svg","escolha, ligação e valores","A pergunta toca numa escolha em que desejo, relação e valores pessoais precisam de estar alinhados.","Decide pelo que é coerente contigo, não apenas pelo que é mais imediato."],
["major-07","O Carro","07-chariot.svg","direção, avanço e determinação","Há energia para avançar, desde que escolhas uma direção e evites dispersar forças.","Conduz a situação com foco e disciplina."],
["major-08","A Justiça","08-justice.svg","equilíbrio, consequência e clareza","A resposta pede objetividade e atenção às consequências de cada escolha.","Olha para factos, acordos e responsabilidades antes de decidir."],
["major-09","O Eremita","09-hermit.svg","reflexão, prudência e maturidade","Este pode ser um momento de reduzir o ruído externo e compreender melhor o que realmente procuras.","Dá tempo à resposta; nem tudo precisa de ser acelerado."],
["major-10","A Roda da Fortuna","10-wheel-of-fortune.svg","mudança, ciclo e oportunidade","A situação está sujeita a movimento e mudança. O que hoje parece fixo pode ganhar outra direção.","Mantém flexibilidade para aproveitar uma mudança de contexto."],
["major-11","A Força","11-strength.svg","coragem, domínio e energia interior","A resposta favorece firmeza sem agressividade: força bem dirigida vale mais do que pressão.","Age com confiança, mas conserva controlo emocional."],
["major-12","O Enforcado","12-hanged-man.svg","pausa, perspetiva e entrega","Pode ser necessário parar de insistir na mesma abordagem e observar a questão por outro ângulo.","Suspende a pressa e aceita mudar de perspetiva."],
["major-13","Arcano XIII · A Morte","13-death.svg","transformação, fim e renovação","Algo na situação pode precisar de terminar ou mudar profundamente para criar espaço para o próximo ciclo.","Liberta o que já cumpriu a sua função."],
["major-14","A Temperança","14-temperance.svg","equilíbrio, integração e paciência","A questão beneficia de moderação e de um processo gradual em vez de extremos.","Combina recursos e dá tempo para as peças se ajustarem."],
["major-15","O Diabo","15-devil.svg","desejo, apego e intensidade","A pergunta pode envolver um desejo forte, dependência, medo de perder ou uma atração difícil de ignorar.","Reconhece o que te prende antes de lhe entregares poder."],
["major-16","A Casa de Deus","16-tower.svg","rutura, revelação e libertação","Uma estrutura ou expectativa pode ser confrontada por informação que obriga a rever certezas.","Usa a verdade que aparece para reconstruir melhor."],
["major-17","A Estrela","17-star.svg","esperança, autenticidade e inspiração","Há espaço para recuperar confiança e seguir uma direção mais genuína e simples.","Mantém-te fiel ao essencial e alimenta o que queres construir."],
["major-18","A Lua","18-moon.svg","sensibilidade, incerteza e imaginação","Nem tudo está totalmente claro. Emoções, receios ou projeções podem estar a influenciar a leitura da situação.","Não confundas sensação com certeza; procura mais clareza antes de concluir."],
["major-19","O Sol","19-sun.svg","clareza, vitalidade e abertura","A pergunta encontra uma energia mais transparente, favorável à expressão e à compreensão mútua.","Traz o assunto para a luz e comunica de forma direta."],
["major-20","O Julgamento","20-judgement.svg","despertar, decisão e chamada","Algo pede reconhecimento e uma resposta mais consciente, como se uma fase estivesse pronta para ser assumida.","Ouve o que já sabes e toma uma decisão coerente."],
["major-21","O Mundo","21-world.svg","conclusão, integração e realização","A questão aponta para fechamento de ciclo, visão mais ampla ou integração das várias partes da situação.","Reconhece o que já foi conquistado antes de abrir a próxima etapa."]
].map(x=>({code:x[0],name:x[1],file:x[2],essence:x[3],question:x[4],advice:x[5],arcana:"Arcano Maior"}));

const suits={
 wands:{pt:"Paus",theme:"ação, iniciativa, criatividade e projetos",question:"A tua pergunta ganha movimento quando transformas intenção em ação.",advice:"Usa a energia com direção e evita dispersão."},
 cups:{pt:"Copas",theme:"emoções, relações, afeto e intuição",question:"A tua pergunta pede atenção ao que sentes e à qualidade das ligações envolvidas.",advice:"Escuta as emoções sem deixar que substituam completamente os factos."},
 swords:{pt:"Espadas",theme:"pensamento, decisões, conflito e clareza",question:"A tua pergunta pede lucidez, comunicação e capacidade para distinguir factos de receios.",advice:"Procura clareza antes de reagir e escolhe as palavras com intenção."},
 coins:{pt:"Ouros",theme:"recursos, segurança, trabalho material e estabilidade",question:"A tua pergunta beneficia de uma abordagem prática e de atenção ao que é sustentável.",advice:"Constrói passo a passo e confirma se a base é sólida."}
};
const ranks=[
["ace","Ás","um início e potencial ainda por desenvolver","Abre-se uma possibilidade, mas precisa de ação para ganhar forma."],
["02","Dois","escolha, equilíbrio e relação entre duas forças","Há duas posições ou caminhos a equilibrar antes de avançar."],
["03","Três","desenvolvimento, colaboração e expansão inicial","Algo começa a ganhar forma através de continuidade ou cooperação."],
["04","Quatro","estrutura, estabilidade e necessidade de preservar","A questão procura segurança, mas convém evitar rigidez excessiva."],
["05","Cinco","tensão, mudança e necessidade de adaptação","Um desconforto pode estar a mostrar exatamente o que precisa de ser revisto."],
["06","Seis","ajuste, progresso e procura de harmonia","Há possibilidade de recuperar equilíbrio através de uma escolha mais consciente."],
["07","Sete","avaliação, persistência e teste","O momento pede análise e resistência antes de decidir se continuas ou ajustas."],
["08","Oito","movimento, organização e aperfeiçoamento","A situação responde melhor à prática consistente do que a soluções instantâneas."],
["09","Nove","maturidade, resistência e aproximação ao resultado","Estás perto de compreender ou concluir algo, mas ainda é importante manter discernimento."],
["10","Dez","conclusão, excesso e transição para novo ciclo","Uma fase aproxima-se do limite e pede encerramento, redistribuição ou renovação."],
["page","Valete","curiosidade, mensagem e aprendizagem","Há algo novo para aprender, perguntar ou experimentar antes de assumir certezas."],
["knight","Cavaleiro","movimento, procura e intensidade","A situação está a ganhar velocidade; escolhe bem a direção antes de avançar."],
["queen","Rainha","maturidade interior, compreensão e domínio sensível","A resposta pede segurança interior e uma leitura mais profunda do contexto."],
["king","Rei","autoridade, experiência e domínio","A situação pede responsabilidade, visão global e capacidade para assumir consequências."]
];
const minors=[];
for(const [slug,s] of Object.entries(suits)){
 for(const r of ranks){
  minors.push({
   code:slug+"-"+r[0],name:r[1]+" de "+s.pt,file:slug+"-"+r[0]+".svg",
   essence:r[2]+" no domínio de "+s.theme,
   question:r[3]+" "+s.question,
   advice:s.advice,
   arcana:"Arcano Menor · "+s.pt
  });
 }
}
const DECK=[...majors,...minors];
const byCode=code=>DECK.find(c=>c.code===code);
const lisbonDay=()=>new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Lisbon",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
function hash32(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function candidates(uid){const r=rng(hash32(uid+"|"+lisbonDay()+"|ASTRA-TAROT")),pool=DECK.slice(),out=[];while(out.length<3){const i=Math.floor(r()*pool.length);out.push(pool.splice(i,1)[0])}return out}
function cardImage(c){return IMG+c.file}
function tarotDate(){return new Intl.DateTimeFormat("pt-PT",{timeZone:"Europe/Lisbon",weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(new Date())}
function energyFor(c){
 if(c.code.startsWith("wands-"))return "Ação e iniciativa";
 if(c.code.startsWith("cups-"))return "Emoção e ligação";
 if(c.code.startsWith("swords-"))return "Clareza e decisão";
 if(c.code.startsWith("coins-"))return "Estabilidade e construção";
 const x=(c.essence||"energia interior").split(",")[0].trim();return x.charAt(0).toUpperCase()+x.slice(1);
}
function setStatus(t){const x=$("tarotStatus");if(x)x.textContent=t||""}
function formatHistoryDate(d){try{return new Intl.DateTimeFormat("pt-PT",{day:"2-digit",month:"short",year:"numeric",timeZone:"Europe/Lisbon"}).format(new Date(d+"T12:00:00"))}catch(_){return d}}
function renderHistoryLocked(){
 const box=$("tarotHistoryList");if(!box)return;
 box.innerHTML="<div class='tarotHistoryLock'><span>♕</span><div><b>Histórico Premium</b><p>Revê as cartas que te saíram nos dias anteriores com ASTRA Premium.</p></div><button class='primary' data-go-premium>Ver Premium ✦</button></div>";
}
async function loadHistory(){
 const box=$("tarotHistoryList");if(!box)return;
 const premium=window.ASTRA_ENTITLEMENTS?.isPremium?.()||false;
 if(!premium){renderHistoryLocked();return}
 box.innerHTML="<p class='muted'>A carregar o teu histórico…</p>";
 try{
  const q=await sb.rpc("get_tarot_history",{p_limit:30});if(q.error)throw q.error;
  const rows=Array.isArray(q.data)?q.data:[];
  if(!rows.length){box.innerHTML="<div class='card tarotHistoryEmpty'><span>☾</span><p>Ainda não tens tiragens anteriores. As tuas cartas começarão a aparecer aqui.</p></div>";return}
  box.innerHTML=rows.map(r=>{const c=byCode(r.card_code);if(!c)return "";return "<button class='tarotHistoryItem' data-history-card='"+c.code+"'><img src='"+cardImage(c)+"' alt=''><span><small>"+formatHistoryDate(r.draw_date)+"</small><b>"+c.name+"</b><em>"+energyFor(c)+"</em></span><i>›</i></button>"}).join("");
 }catch(e){
  console.warn("tarot history",e);
  box.innerHTML="<p class='muted'>Não foi possível carregar o histórico neste momento.</p>";
 }
}
function showHistoryCard(code){
 const c=byCode(code);if(!c)return;
 const d=$("tarotHistoryDialog"),body=$("tarotHistoryDialogBody");if(!d||!body)return;
 body.innerHTML="<div class='tarotHistoryDetail'><div class='tarotRevealedCard'><img src='"+cardImage(c)+"' alt='"+c.name+"'></div><div><span class='eyebrow'>TIRAGEM ANTERIOR</span><h2>"+c.name+"</h2><small>"+c.arcana+"</small><div class='tarotEnergy'><span>✦</span><div><small>ENERGIA</small><b>"+energyFor(c)+"</b></div></div><h3>Essência</h3><p>"+c.essence+".</p><h3>Conselho</h3><p>"+c.advice+"</p></div></div>";
 d.showModal?d.showModal():d.setAttribute("open","");
}
function resetView(){
 $("tarotIntro")?.classList.remove("hidden");$("tarotDrawArea")?.classList.add("hidden");$("tarotResult")?.classList.add("hidden");
 if($("tarotCards"))$("tarotCards").innerHTML="";
 setStatus("");
}
function renderSaved(c){
 if(!c)return;
 $("tarotIntro")?.classList.add("hidden");$("tarotDrawArea")?.classList.add("hidden");
 const r=$("tarotResult");r.classList.remove("hidden");
 r.innerHTML="<div class='tarotResultHead'><span class='eyebrow'>A TUA CARTA DE HOJE</span><span class='tarotResultDate'>"+tarotDate()+"</span></div><div class='tarotRevealWrap'><div class='tarotRevealedCard tarotResultCard'><span class='tarotCardGlow'></span><img src='"+cardImage(c)+"' alt='"+c.name+"'></div><div class='tarotMeaning'><h2>"+c.name+"</h2><small>"+c.arcana+"</small><div class='tarotEnergy'><span>✦</span><div><small>ENERGIA DOMINANTE DO DIA</small><b>"+energyFor(c)+"</b></div></div><div class='tarotReadingBlock'><h3>Essência</h3><p>"+c.essence+".</p></div><div class='tarotReadingBlock'><h3>O que isto diz sobre a tua pergunta</h3><p>"+c.question+"</p></div><div class='tarotReadingBlock'><h3>Conselho prático para hoje</h3><p>"+c.advice+"</p></div><div class='tarotTomorrow'><span>☾</span><div><b>Tiragem concluída</b><small>Volta amanhã para uma nova carta.</small></div></div><p class='tiny muted'>O Tarot ASTRA é uma ferramenta de reflexão e entretenimento. Não determina acontecimentos futuros nem substitui aconselhamento profissional.</p></div></div>";
 setStatus("A tua tiragem diária está guardada.");
 setTimeout(()=>loadHistory(),0);
}
async function restore(){
 try{
  const s=(await sb.auth.getSession()).data?.session;if(!s)return;
  const q=await sb.rpc("get_today_tarot_draw");if(q.error)throw q.error;
  const row=Array.isArray(q.data)?q.data[0]:q.data;
  if(row?.card_code){const c=byCode(row.card_code);if(c){renderSaved(c);return}}
  resetView();
 }catch(e){console.warn("tarot restore",e);setStatus("Não foi possível verificar a tiragem de hoje.")}
}
function openQuestion(){
 const d=$("tarotQuestionDialog");if(!d)return;
 $("tarotThinkStep").classList.remove("hidden");$("tarotConfirmStep").classList.add("hidden");
 d.showModal?d.showModal():d.setAttribute("open","");
}
function showCandidates(uid){
 $("tarotIntro").classList.add("hidden");$("tarotResult").classList.add("hidden");$("tarotDrawArea").classList.remove("hidden");
 const cards=candidates(uid),wrap=$("tarotCards");
 wrap.classList.remove("tarotDealing");void wrap.offsetWidth;wrap.classList.add("tarotDealing");wrap.innerHTML=cards.map((c,i)=>"<button class='tarotPick' style='--tarot-i:"+i+"' data-card='"+c.code+"' aria-label='Carta "+(i+1)+"'><span class='tarotFlip'><span class='tarotBack'><span class='tarotBackMark'>✦</span><span class='tarotAura'></span></span><span class='tarotFront'><img src='"+cardImage(c)+"' alt=''></span></span></button>").join("");
 setStatus("Respira, observa as três cartas e seleciona a que mais te atrai.");
}
async function choose(btn){
 if(btn.dataset.busy==="1")return;
 const code=btn.dataset.card,c=byCode(code);if(!c)return;
 document.querySelectorAll(".tarotPick").forEach(x=>{x.disabled=true;x.dataset.busy="1"});
 setStatus("A revelar a tua carta…");
 try{
  const q=await sb.rpc("claim_tarot_draw",{p_card_code:code});if(q.error)throw q.error;
  const row=Array.isArray(q.data)?q.data[0]:q.data,actual=byCode(row?.card_code)||c;
  if(actual.code!==code){renderSaved(actual);return}
  try{navigator.vibrate?.([22,35,22])}catch(_){} btn.classList.add("revealed","tarotChosen");document.querySelectorAll(".tarotPick").forEach(x=>{if(x!==btn)x.classList.add("notChosen")});
  setStatus("A tua carta escolheu revelar-se…");setTimeout(()=>renderSaved(actual),1450);
 }catch(e){
  console.error("tarot draw",e);document.querySelectorAll(".tarotPick").forEach(x=>{x.disabled=false;x.dataset.busy="0"});
  setStatus("Não foi possível guardar a tiragem. Tenta novamente.");
 }
}
document.addEventListener("click",async e=>{
 const nav=e.target.closest('.nav[data-view="tarotView"]');if(nav){setTimeout(()=>{restore();loadHistory()},0);return}
 if(e.target.closest("#tarotStart")){openQuestion();return}
 if(e.target.closest("#tarotThought")){$("tarotThinkStep").classList.add("hidden");$("tarotConfirmStep").classList.remove("hidden");return}
 if(e.target.closest("#tarotNotYet")){$("tarotConfirmStep").classList.add("hidden");$("tarotThinkStep").classList.remove("hidden");return}
 if(e.target.closest("#tarotYes")){
  const s=(await sb.auth.getSession()).data?.session;if(!s){location.href="index.html";return}
  $("tarotQuestionDialog")?.close();showCandidates(s.user.id);return
 }
 if(e.target.closest("#tarotClose")){$("tarotQuestionDialog")?.close();return}
 if(e.target.closest("#tarotHistoryClose")){$("tarotHistoryDialog")?.close();return}
 const hist=e.target.closest("[data-history-card]");if(hist){showHistoryCard(hist.dataset.historyCard);return}
 const pick=e.target.closest(".tarotPick");if(pick){choose(pick);return}
});
window.ASTRA_TAROT={deck:DECK,restore,candidates,loadHistory};
})();
