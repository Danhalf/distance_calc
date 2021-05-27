let first;

fetch(
  'https://api.mapbox.com/directions-matrix/v1/mapbox/driving/30.160912,50.326342;30.974,49.915?access_token=pk.eyJ1IjoiZGFuaGFsZiIsImEiOiJja3A2dzhnOHAwdW93MndxdHVsa3dxOXFpIn0.or1NJxIWSuvz3VPQjPXhmA'
)
  .then((res) => res.json())
  .then((res) => console.log(res));
