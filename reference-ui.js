document.addEventListener("DOMContentLoaded",()=>{
 const $=id=>document.getElementById(id);
 const date=$("date")?.textContent||new Intl.DateTimeFormat("pt-PT",{dateStyle:"full"}).format(new Date());
 if($("refDate"))$("refDate").textContent=date;
 const syncGreeting=()=>{let x=$("hello")?.textContent;if(x&&$("refGreeting"))$("refGreeting").textContent=x};
 syncGreeting();setTimeout(syncGreeting,350);
 const aliases={today:["today","hoje"],chart:["chart","mapa"],premium:["premium"],profile:["profile","perfil"]};
 document.querySelectorAll("[data-ref-view]").forEach(b=>b.addEventListener("click",()=>{
   let target=b.dataset.refView, candidates=[...document.querySelectorAll("nav button,.bottomNav button,.bottom-nav button")];
   let real=candidates.find(x=>aliases[target]?.some(k=>(x.dataset.view||x.id||x.textContent).toLowerCase().includes(k)));
   if(real)real.click();
   document.querySelectorAll(".refSideNav button").forEach(x=>x.classList.toggle("active",x===b));
 }));
});