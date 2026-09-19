/* Build-step adapter for @swisseph/browser.
Usage in bundled production build:
import { SwissEphemeris, Planet, HouseSystem } from "@swisseph/browser";
export async function calculateNatal({utcDate,lat,lon}) {
 const swe=new SwissEphemeris(); await swe.init();
 try {
   const jd=swe.dateToJulianDay(utcDate);
   const moon=swe.calculatePosition(jd,Planet.Moon);
   const houses=swe.calculateHouses(jd,lat,lon,HouseSystem.Placidus);
   return {
     moon:ASTRA_ASTRO.signFromLongitude(moon.longitude),
     ascendant:ASTRA_ASTRO.signFromLongitude(houses.ascendant),
     descendant:ASTRA_ASTRO.opposite(houses.ascendant),
     mc:ASTRA_ASTRO.signFromLongitude(houses.mc)
   };
 } finally { swe.close(); }
}
*/