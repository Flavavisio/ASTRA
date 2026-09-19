(()=>{const $=id=>document.getElementById(id);
const signFor=d=>{let x=new Date(d+"T12:00:00"),m=x.getMonth()+1,n=x.getDate(),c={1:[20,"Capricórnio","Aquário"],2:[19,"Aquário","Peixes"],3:[21,"Peixes","Carneiro"],4:[20,"Carneiro","Touro"],5:[21,"Touro","Gémeos"],6:[21,"Gémeos","Caranguejo"],7:[23,"Caranguejo","Leão"],8:[23,"Leão","Virgem"],9:[23,"Virgem","Balança"],10:[23,"Balança","Escorpião"],11:[22,"Escorpião","Sagitário"],12:[22,"Sagitário","Capricórnio"]}[m];return n<c[0]?c[1]:c[2]};
function validFullName(v){return v.trim().split(/\s+/).filter(Boolean).length>=2}
function toast(t){let e=$("toast");if(!e){alert(t);return}e.textContent=t;e.classList.remove("hidden");setTimeout(()=>e.classList.add("hidden"),2600)}
function showHome(name,birth){
 $("setup")?.classList.add("hidden");$("home")?.classList.remove("hidden");
 if($("hello"))$("hello").textContent=`Olá, ${name.split(/\s+/)[0]} ✦`;
 if($("date"))$("date").textContent=new Intl.DateTimeFormat("pt-PT",{dateStyle:"full"}).format(new Date());
 if($("sign"))$("sign").textContent=signFor(birth);
 if($("dailyIntro"))$("dailyIntro").textContent="O céu de hoje tem uma mensagem para ti.";
}
async function saveToAccount(name,birth){
 let sb=window.supabaseClient;if(!sb)return;
 let {data:{user}}=await sb.auth.getUser();if(!user)return;
 await sb.from("profiles").update({full_name:name,birth_date:birth,updated_at:new Date().toISOString()}).eq("id",user.id);
}
$("save")&&($("save").onclick=async()=>{
 let name=$("name").value.trim(),birth=$("birth").value;
 if(!validFullName(name)){toast("Indica o teu nome completo, incluindo pelo menos nome e apelido.");$("name").focus();return}
 if(!birth){toast("Indica a tua data de nascimento.");$("birth").focus();return}
 let d=new Date(birth+"T12:00:00");if(Number.isNaN(d.getTime())||d>new Date()){toast("Confirma a data de nascimento.");return}
 localStorage.setItem("astra_profile",JSON.stringify({name,birth}));
 await saveToAccount(name,birth);showHome(name,birth);
});
$("consult")&&($("consult").onclick=()=>{
 let p=JSON.parse(localStorage.getItem("astra_profile")||"null");if(!p)return;
 let seed=p.birth+new Date().toISOString().slice(0,10),n=[...seed].reduce((a,c)=>a+c.charCodeAt(0),0);
 let pick=(a,k)=>a[(n+k)%a.length],love=["Hoje favorece conversas sinceras e gestos simples.","Dá espaço ao afeto sem forçar respostas.","Uma ligação pode ganhar clareza se ouvires antes de reagir."],work=["Define uma prioridade e termina-a antes de abrir outra.","A organização vale mais hoje do que a pressa.","Uma ideia prática pode desbloquear algo que estava parado."],well=["Reserva alguns minutos para abrandar o ritmo.","Procura equilíbrio entre movimento e descanso.","Pequenas pausas podem ajudar-te a recuperar foco."];
 let out=$("reading");if(out){out.innerHTML=`<article class="card"><h3>❤️ Amor</h3><p>${pick(love,1)}</p><h3>💼 Trabalho</h3><p>${pick(work,2)}</p><h3>🌿 Saúde & bem-estar</h3><p>${pick(well,3)}</p></article>`;out.classList.remove("hidden")}
 $("consult").disabled=true;$("consult").textContent="Volta amanhã 🌙";$("consult").type="button";$("consult").onclick=(e)=>{e.preventDefault();e.stopPropagation();};if($("limit"))$("limit").textContent="Consulta gratuita de hoje concluída.";
});
$("editProfile")&&($("editProfile").onclick=()=>{let p=JSON.parse(localStorage.getItem("astra_profile")||"null");if(p){$("editName").value=p.name;$("editBirth").value=p.birth}$("profileDialog").showModal()});
$("saveProfile")&&($("saveProfile").onclick=()=>{let name=$("editName").value.trim(),birth=$("editBirth").value;if(!validFullName(name)||!birth)return;localStorage.setItem("astra_profile",JSON.stringify({name,birth}));saveToAccount(name,birth);showHome(name,birth)});
let existing=JSON.parse(localStorage.getItem("astra_profile")||"null");if(existing?.name&&existing?.birth)showHome(existing.name,existing.birth);
})();