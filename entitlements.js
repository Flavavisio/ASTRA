window.ASTRA_ENTITLEMENTS=(()=>{
let premium=false;
async function refresh(client){
 const {data,error}=await client.rpc("has_astra_premium");
 if(error){console.error("premium check",error);premium=false}else premium=!!data;
 document.documentElement.dataset.astraPremium=premium?"true":"false";
 document.dispatchEvent(new CustomEvent("astra:entitlement",{detail:{premium}}));
 return premium;
}
const isPremium=()=>premium;
return{refresh,isPremium};
})();