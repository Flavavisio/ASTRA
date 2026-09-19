window.ASTRA_PLACES=[
{name:"Lisboa",country:"Portugal",lat:38.7223,lon:-9.1393,tz:"Europe/Lisbon"},
{name:"Vila Franca de Xira",country:"Portugal",lat:38.9553,lon:-8.9897,tz:"Europe/Lisbon"},
{name:"Póvoa de Santa Iria",country:"Portugal",lat:38.8610,lon:-9.0645,tz:"Europe/Lisbon"},
{name:"Cascais",country:"Portugal",lat:38.6979,lon:-9.4215,tz:"Europe/Lisbon"},
{name:"Sintra",country:"Portugal",lat:38.8029,lon:-9.3817,tz:"Europe/Lisbon"},
{name:"Porto",country:"Portugal",lat:41.1579,lon:-8.6291,tz:"Europe/Lisbon"},
{name:"Coimbra",country:"Portugal",lat:40.2033,lon:-8.4103,tz:"Europe/Lisbon"},
{name:"Braga",country:"Portugal",lat:41.5454,lon:-8.4265,tz:"Europe/Lisbon"},
{name:"Faro",country:"Portugal",lat:37.0194,lon:-7.9304,tz:"Europe/Lisbon"},
{name:"Funchal",country:"Portugal",lat:32.6669,lon:-16.9241,tz:"Europe/Lisbon"},
{name:"Ponta Delgada",country:"Portugal",lat:37.7412,lon:-25.6756,tz:"Atlantic/Azores"}
];
window.ASTRA_FIND_PLACE=q=>{q=(q||"").trim().toLocaleLowerCase("pt");return ASTRA_PLACES.find(p=>p.name.toLocaleLowerCase("pt")===q)||ASTRA_PLACES.find(p=>p.name.toLocaleLowerCase("pt").includes(q));};