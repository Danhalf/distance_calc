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
const [lng, lan] = [30.95553, 50.34845];

const from = [30.160912, 50.326342]; //lng, lat
const to = [lng, lan]; //lng, lat

const greenMarker = new mapboxgl.Marker({
  color: '#ffde3b',
})
  .setLngLat(to) // marker position using variable 'to'
  .addTo(map); //add marker to map

const purpleMarker = new mapboxgl.Marker({
  color: '#007336',
})
  .setLngLat(from) // marker position using variable 'from'
  .addTo(map); //add marker to map

const options = {
  units: 'kilometers',
}; // units can be degrees, radians, miles, or kilometers, just be sure to change the units in the text box to match.

const distance = turf.distance(to, from, options);

const value = document.getElementById('map-overlay');
value.innerHTML = `Відстань: ${distance.toFixed([
  2,
])} кілометрів, орієнтована вартість доставки: ${(distance * 22).toFixed([
  2,
])} грн`;
