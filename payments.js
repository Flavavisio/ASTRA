window.ASTRA_PAYMENT={
 provider:"mollie",
 checkoutEndpoint:"https://kujhekqsiskaeezsuufw.supabase.co/functions/v1/astra-checkout",
 async checkout(plan){
  const client=window.supabaseClient||window.sb||window.s;
  if(!client)throw Error("Sessão indisponível.");
  const {data:{session}}=await client.auth.getSession();
  if(!session)throw Error("Inicia sessão para ativar Premium.");
  const r=await fetch(this.checkoutEndpoint,{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+session.access_token},body:JSON.stringify({plan})});
  const x=await r.json(); if(!r.ok)throw Error(x.error||"Não foi possível iniciar o pagamento.");
  location.href=x.checkout_url;
 }
};