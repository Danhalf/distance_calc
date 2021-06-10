const API_KEY =
  'pk.eyJ1IjoiZGFuaGFsZiIsImEiOiJja3A2dzhnOHAwdW93MndxdHVsa3dxOXFpIn0.or1NJxIWSuvz3VPQjPXhmA';

mapboxgl.accessToken = API_KEY;
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [30.50912, 50.326342],
  zoom: 8.5,
});
map.scrollZoom.disable();

const inputValue = document.querySelector('#calc-region');
const coordinates = inputValue.value.split`,`.map((e) => +e);
console.log(coordinates);
const [lng, lan] = coordinates;

const from = [30.160912, 50.326342]; //lng, lat
let to = [lng, lan]; //lng, lat

const pricePerKm = 22;

let markerTo = new mapboxgl.Marker({
  color: '#ffde3b',
})
  .setLngLat(to) // marker position using variable 'to'
  .addTo(map); //add marker to map

const purpleMarker = new mapboxgl.Marker({
  color: '#007336',
})
  .setLngLat(from) // marker position using variable 'from'
  .addTo(map); //add marker to map

inputValue.addEventListener('change', () => {
  console.log(inputValue.value);
  markerTo.remove();
  markerTo = new mapboxgl.Marker({
    color: '#ffde3b',
  })
    .setLngLat(to)
    .addTo(map); //add marker to map; // marker position using variable 'to'
});

const options = {
  units: 'kilometers',
}; // units can be degrees, radians, miles, or kilometers, just be sure to change the units in the text box to match.

const distance = turf.distance(to, from, options);

const value = document.getElementById('map-overlay');
value.innerHTML = `Відстань: ${distance.toFixed([
  2,
])} кілометрів, орієнтована вартість доставки: ${(
  distance * pricePerKm
).toFixed([2])} грн`;
