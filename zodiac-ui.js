(()=>{const Z={
"Carneiro":"♈","Touro":"♉","Gémeos":"♊","Caranguejo":"♋","Leão":"♌","Virgem":"♍","Balança":"♎","Escorpião":"♏","Sagitário":"♐","Capricórnio":"♑","Aquário":"♒","Peixes":"♓",
"Aries":"♈","Taurus":"♉","Gemini":"♊","Cancer":"♋","Leo":"♌","Virgo":"♍","Libra":"♎","Scorpio":"♏","Sagittarius":"♐","Capricorn":"♑","Aquarius":"♒","Pisces":"♓",
"Aries_es":"♈","Tauro":"♉","Géminis":"♊","Cáncer":"♋","Leo_es":"♌","Virgo_es":"♍","Libra_es":"♎","Escorpio":"♏","Sagitario":"♐","Capricornio":"♑","Acuario":"♒","Piscis":"♓"};
function glyph(sign){return Z[sign]||Z[sign+"_es"]||"✦"}
function paint(){
 const e=document.getElementById("sign"); if(!e)return;
 let sign=e.dataset.sign||e.textContent.replace(/[♈-♓]/g,"").trim();
 if(!sign)return;e.dataset.sign=sign;
 e.innerHTML=`<span class="zodiacGlyph" aria-hidden="true">${glyph(sign)}</span><span class="zodiacName">${sign}</span>`;
}
window.ASTRA_ZODIAC={glyph,paint};
document.addEventListener("DOMContentLoaded",paint);
document.addEventListener("astra:language",()=>setTimeout(paint,0));
})();