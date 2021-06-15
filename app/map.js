const API_KEY =
  'pk.eyJ1IjoiZGFuaGFsZiIsImEiOiJja3A2dzhnOHAwdW93MndxdHVsa3dxOXFpIn0.or1NJxIWSuvz3VPQjPXhmA';
const fromPoint = [30.160912, 50.326342];

mapboxgl.accessToken = API_KEY;

export const mapAPI = (coordinates) => {
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [30.50912, 50.326342],
    zoom: 5,
  });
  map.scrollZoom.disable();

  coordinates = coordinates.split(',');
  console.log(coordinates);
  const [lng, lan] = coordinates;

  const from = fromPoint; //lng, lat
  let to = [lng, lan]; //lng, lat

  const pricePerKm = 22;

  let markerTo = new mapboxgl.Marker({
    color: '#ffde3b',
  })
    .setLngLat(to) // marker position using variable 'to'
    .addTo(map); //add marker to map

  const markerFrom = new mapboxgl.Marker({
    color: '#007336',
  })
    .setLngLat(from) // marker position using variable 'from'
    .addTo(map); //add marker to map

  // inputValue.addEventListener('change', () => {
  //   console.log(inputValue.value);
  //   markerTo.remove();
  //   markerTo = new mapboxgl.Marker({
  //     color: '#ffde3b',
  //   })
  //     .setLngLat(to)
  //     .addTo(map); //add marker to map; // marker position using variable 'to'
  // });

  const options = {
    units: 'kilometers',
  }; // units can be degrees, radians, miles, or kilometers, just be sure to change the units in the text box to match.

  const distance = turf.distance(to, from, options);

  const mapOverlay = document.getElementById('map-overlay');
  mapOverlay.innerHTML = `Відстань: ${~~distance} кілометрів, орієнтована вартість доставки: ${~~(
    distance * pricePerKm
  )} грн`;

  return [
    `${~~distance} км`,
    `${~~(distance * pricePerKm)} грн.`,
    `${pricePerKm} грн за км.`,
  ];
};

// export default mapAPI()
