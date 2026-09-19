window.ASTRA_ASTRO=(()=>{
const SIGNS=["Carneiro","Touro","Gémeos","Caranguejo","Leão","Virgem","Balança","Escorpião","Sagitário","Capricórnio","Aquário","Peixes"];
const GLYPHS=["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];
function signFromLongitude(deg){let d=((+deg%360)+360)%360,i=Math.floor(d/30);return{name:SIGNS[i],glyph:GLYPHS[i],degree:d-i*30,longitude:d}}
function opposite(deg){return signFromLongitude(+deg+180)}
function birthDataReady(p){return !!(p?.birth_date&&p?.birth_time&&p?.birth_timezone&&Number.isFinite(+p?.birth_lat)&&Number.isFinite(+p?.birth_lon))}
function tzOffsetMs(date,timeZone){const f=new Intl.DateTimeFormat("en-US",{timeZone,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});const o=Object.fromEntries(f.formatToParts(date).filter(x=>x.type!=="literal").map(x=>[x.type,x.value]));return Date.UTC(+o.year,+o.month-1,+o.day,+o.hour,+o.minute,+o.second)-date.getTime()}
function localBirthToUTC(dateStr,timeStr,timeZone){let [y,m,d]=dateStr.split("-").map(Number),[hh,mm,ss=0]=timeStr.split(":").map(Number);let guess=new Date(Date.UTC(y,m-1,d,hh,mm,ss));for(let i=0;i<3;i++)guess=new Date(Date.UTC(y,m-1,d,hh,mm,ss)-tzOffsetMs(guess,timeZone));return guess}
return{SIGNS,GLYPHS,signFromLongitude,opposite,birthDataReady,localBirthToUTC};
})();