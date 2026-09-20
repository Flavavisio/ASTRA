document.addEventListener("DOMContentLoaded",()=>{
(()=>{const sb=window.supabaseClient,$=id=>document.getElementById(id);
async function route(user){
 let isAdmin=false;
 try{const q=await Promise.race([sb.from("profiles").select("is_super_admin").eq("id",user.id).maybeSingle(),new Promise((_,r)=>setTimeout(()=>r(new Error("ROUTE_TIMEOUT")),4000))]);isAdmin=!!q.data?.is_super_admin}catch(e){console.warn("ASTRA route",e)}
 location.replace(isAdmin?"admin.html":"app.html");
}
async function state(){
 const {data:{user},error}=await sb.auth.getUser();
 if(error){console.warn("ASTRA auth state",error)}
 $("authLoggedIn")?.classList.toggle("hidden",!user);
 $("authLoggedOut")?.classList.toggle("hidden",!!user);
 if(user){
  if($("userEmail"))$("userEmail").textContent=user.email||"";
  if($("authText"))$("authText").textContent="Sessão iniciada. A abrir a tua ASTRA…";
  if($("authTitle"))$("authTitle").textContent="Bem-vindo de volta ✦";
  await route(user);
 }
}
$("loginBtn")?.addEventListener("click",async()=>{
 const email=$("loginEmail").value.trim(),password=$("loginPassword").value,status=$("loginStatus");
 if(!email||!password){status.textContent="Preenche o email e a password.";return}
 status.textContent="A entrar…";
 const r=await sb.auth.signInWithPassword({email,password});
 if(r.error){status.textContent="Email ou password incorretos.";return}
 await route(r.data.user);
});
$("loginPassword")?.addEventListener("keydown",e=>{if(e.key==="Enter")$("loginBtn").click()});
$("openSignup")?.addEventListener("click",()=>{$("signupStatus").textContent="";$("signupDialog").showModal()});
$("closeSignup")?.addEventListener("click",()=>$("signupDialog").close());
$("signupBtn")?.addEventListener("click",async()=>{
 const name=$("signupName").value.trim(),birth=$("signupBirth").value,email=$("signupEmail").value.trim(),password=$("signupPassword").value,password2=$("signupPassword2").value,status=$("signupStatus");
 if(name.split(/\s+/).filter(Boolean).length<2){status.textContent="Indica o teu nome completo.";return}
 if(!birth){status.textContent="Indica a tua data de nascimento.";return}
 if(!email){status.textContent="Indica o teu email.";return}
 if(password.length<6){status.textContent="A password deve ter pelo menos 6 caracteres.";return}
 if(password!==password2){status.textContent="As passwords não coincidem.";return}
 status.textContent="A criar conta…";
 const r=await sb.auth.signUp({email,password,options:{data:{full_name:name,birth_date:birth}}});
 if(r.error){status.textContent=r.error.message;return}
 // Trigger creates profile; explicitly sync name when a session is immediately available.
 if(r.data.user&&r.data.session)await sb.from("profiles").update({full_name:name,birth_date:birth,updated_at:new Date().toISOString()}).eq("id",r.data.user.id);
 if(r.data.session){status.textContent="Conta criada.";await route(r.data.user)}
 else status.textContent="Conta criada. Confirma o email que enviámos para entrares.";
});
$("logoutBtn")?.addEventListener("click",async()=>{await sb.auth.signOut();location.reload()});
state();
})();
});
