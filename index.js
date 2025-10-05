window.addEventListener('load', () =>{
    registerSW()

})

async function registerSW() {
    if ('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        } catch(e) {
            console.log ('Deu erro no Service Worker!')
        }
    }
}

var map = L.map('map').setView([-23.575355, -46.523666], 15);


//L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//maxZoom: 17,
//attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
//}).addTo(map); //questao de provedores, esse é o open top map!

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([-23.575020, -46.522167]).addTo(map); //pop up

var circle = L.circle([-23.5751876,-46.5226587], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

var polygon = L.polygon([
    [-23.574919, -46.522514],
    [-23.574958, -46.522533],
    [-23.575025, -46.522246],
    [-23.575062, -46.522264]
]).addTo(map);

marker.bindPopup("Buffet Aroma e Sabor").openPopup();
circle.bindPopup("Você está aqui");
polygon.bindPopup("Sua rota mais próxima");

function onMapClick(e) {
    alert("Você apertou nas coordenadas: " + e.latlng);
}

map.on('click', onMapClick);





