import { citiesData } from "./api.js";
import { mapAPI } from "./map.js";


const selectRegion = document.querySelector('#calc-region');
const selectVillage = document.querySelector('#calc-village');
export let coordinates;

const citiesList = await citiesData();

const selectedOption = sel => sel.options[sel.selectedIndex].value;


const fillSelect = (select, cities) => {

  for (const city of cities) {

    const option = document.createElement('option');
    const [cityName, cityValue] = city;
    option.textContent = cityName;

    if (typeof cityValue === 'object') {
      option.style.fontWeight = 'bolder'
      option.value = cityName;
      option.textContent += ' р-н'
    } else {
      option.value = cityValue;
    }


    select.append(option)
  }
}



fillSelect(selectRegion, citiesList)


selectRegion.addEventListener('change', () => {
  const cityValue = selectedOption(selectRegion)
  selectVillage.innerHTML = null;
  const cities = citiesList.get(cityValue);
  const list = new Map();
  for (const city in cities) {
    const element = cities[city];
    list.set(city, element)
  }
  if (list.size > 0) {
    selectVillage.disabled = false
    selectVillage.classList.add('visible');
  } else {
    selectVillage.disabled = true;
    selectVillage.classList.remove('visible');
    coordinates = cityValue;
    document.getElementById('map-overlay').textContent = coordinates;
    mapAPI(coordinates)
  };
  fillSelect(selectVillage, list)
});

selectVillage.addEventListener('change', () => {
  coordinates = selectedOption(selectVillage);
  document.getElementById('map-overlay').textContent = coordinates;
  mapAPI(coordinates)
})