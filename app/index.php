<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Point Distance</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- <script src="https://unpkg.com/@turf/turf/turf.min.js"></script>
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script> -->
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <section class="distance-calculator">
      <div class="calculator-map">
        <div id="map"></div>
      </div>
      <div class="calculator-data">
      
        <select name="region" id="calc-region">
          <?php
            // $get_cities = file_get_contents('./cities_bd.json');
            // $cities = json_decode($get_cities, true);
            // $selected_village = string;
            // foreach ($cities as $city_name=>$city_coord) {
            //   echo "<option value='$city_coord[0], $city_coord[1]'>$city_name</option>";
            // }
          ?>          
        </select>
        <select disabled name="village" id="calc-village">
        </select>
        <div id="map-overlay">Distance:</div>
      </div>
    </section>
    
    <script type="module" src="./select.js"></script>
    <!-- <script src="./script.js"></script> -->
  </body>
</html>
