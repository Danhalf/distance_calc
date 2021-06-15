<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Point Distance</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://unpkg.com/@turf/turf/turf.min.js"></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <section class="distance-calculator">
      <div class="calculator-data">
        <select name="region" id="calc-region">
        <option hidden disabled selected value> -- Виберіть місто або район -- </option>
        </select>
        <select disabled name="village" id="calc-village">
        <option hidden disabled selected value> -- Виберіть поселення -- </option>
        </select>
        <div id="map-overlay"></div>
        <button id="send">На сервер</button>
      </div>
      <div class="calculator-map">
        <div id="map"></div>
      </div>
    </section>
    <script type="module" src="./select.js"></script>
    <!-- <script src="./script.js"></script> -->
  </body>
</html>
