document.addEventListener("DOMContentLoaded",async()=>{
 const client=window.supabaseClient||window.sb||window.s,bar=document.getElementById("premiumStateBar");
 if(!client){if(bar)bar.textContent="Sessão Premium será verificada após autenticação.";return}
 const ok=await ASTRA_ENTITLEMENTS.refresh(client);
 applyPremium(ok);
});
function applyPremium(ok){
 let bar=document.getElementById("premiumStateBar"),lock=document.getElementById("natalLock"),details=document.getElementById("natalDetails");
 if(bar){bar.className="premiumStateBar "+(ok?"premiumOn":"premiumFree");bar.textContent=ok?"✦ ASTRA Premium ativo":"ASTRA Free · 1 consulta diária";}
 if(lock)lock.classList.toggle("hidden",ok);
 if(details)details.classList.toggle("premiumLocked",!ok);if(ok&&window.ASTRA_LAST_NATAL&&window.ASTRA_RENDER_NATAL)window.ASTRA_RENDER_NATAL(window.ASTRA_LAST_NATAL);
 document.querySelectorAll(".premiumOnly").forEach(x=>x.classList.toggle("locked",!ok));
 const pricing=document.getElementById("astraPricing"),plan=document.getElementById("pPlan"),activate=document.getElementById("activatePremium"),note=document.getElementById("paymentNote");if(plan)plan.textContent=ok?"Premium":"Free";if(pricing)pricing.classList.toggle("hidden",ok);if(activate){activate.disabled=ok;activate.textContent=ok?"✓ Premium ativo":"Ativar Premium · 1,99 €/mês"}if(note&&ok)note.textContent="A tua licença ASTRA Premium está ativa.";
}
document.addEventListener("astra:entitlement",e=>applyPremium(!!e.detail.premium));
document.addEventListener("click",e=>{
 if(e.target.closest("[data-go-premium]"))document.getElementById("astraPricing")?.scrollIntoView({behavior:"smooth",block:"center"});
 let b=e.target.closest(".billing"); if(b){document.querySelectorAll(".billing").forEach(x=>x.classList.remove("active"));b.classList.add("active");let annual=b.dataset.billing==="annual";document.querySelector("#premiumPrice strong").textContent=annual?"21,49 €":"1,99 €";document.querySelector("#premiumPrice small").textContent=annual?"/ano":"/mês";document.getElementById("annualSaving")?.classList.toggle("hidden",!annual);window.ASTRA_SELECTED_PLAN=annual?"annual":"monthly";}
});
window.ASTRA_SELECTED_PLAN="monthly";
document.addEventListener("click",e=>{if(e.target.id==="premiumCheckout"){let cfg=window.ASTRA_PAYMENT;if(!cfg?.checkoutEndpoint){alert("O ASTRA Premium está preparado. Falta apenas ligar o fornecedor de pagamentos.");return}cfg.checkout(window.ASTRA_SELECTED_PLAN).catch(err=>alert(err.message));}});
