# ASTRA v1.3 — Motor astrológico

Implementado nesta fase:
- validação de data + hora + coordenadas + timezone;
- conversão da hora local de nascimento para UTC usando timezone IANA e regras históricas disponíveis no browser;
- conversão de longitudes eclípticas em signo/grau;
- Descendente = ponto oposto ao Ascendente;
- adaptador preparado para `@swisseph/browser`;
- interface de perfil com timezone de nascimento.

## Swiss Ephemeris
A integração de produção usa `@swisseph/browser`: WebAssembly, Moshier incorporado e cálculo de posições/house systems no browser.

## Geocoding
Não foi embutido Nominatim público diretamente na aplicação. A política pública limita uso, proíbe autocomplete client-side e recomenda proxy/cache. Para produção, o local deve ser resolvido através de um serviço configurável/proxy próprio.

## Próximo passo
Adicionar a coluna `birth_timezone` no Supabase e ligar um geocoder de produção para preencher latitude/longitude. Depois, empacotar `@swisseph/browser` no build final e persistir Lua/Ascendente/Descendente.
