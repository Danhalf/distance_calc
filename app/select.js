import { citiesData } from './api.js';
import { mapAPI } from './map.js';

const selectRegion = document.querySelector('#calc-region');
const selectVillage = document.querySelector('#calc-village');
let coordinates = '30.160912, 50.326342';
let deliveryPoint = {};

const citiesList = await citiesData();

const selectedOption = (sel) => [
  sel.options[sel.selectedIndex].text,
  sel.options[sel.selectedIndex].value,
];

mapAPI(coordinates);

const fillSelect = (select, cities) => {
  for (const city of cities) {
    const option = document.createElement('option');
    const [cityName, cityValue] = city;
    option.textContent = cityName;

    if (typeof cityValue === 'object') {
      option.style.fontWeight = 'bolder';
      option.value = cityName;
      option.textContent += ' р-н';
    } else {
      option.value = cityValue;
    }

    select.append(option);
  }
};

fillSelect(selectRegion, citiesList);

selectRegion.addEventListener('change', () => {
  const [cityName, cityValue] = selectedOption(selectRegion);
  selectVillage.innerHTML =
    '<option hidden disabled selected value> -- Виберіть поселення -- </option>';
  const cities = citiesList.get(cityValue);
  const list = new Map();
  for (const city in cities) {
    const element = cities[city];
    list.set(city, element);
  }
  if (list.size > 0) {
    selectVillage.disabled = false;
    selectVillage.classList.add('visible');
    deliveryPoint.region = cityName;
  } else {
    delete deliveryPoint.region;
    selectVillage.disabled = true;
    selectVillage.classList.remove('visible');
    coordinates = cityValue;
    [
      deliveryPoint.distance,
      deliveryPoint.price,
      deliveryPoint.pricePerKm,
    ] = mapAPI(coordinates);
    deliveryPoint.city = `Місто ${cityName}`;
  }
  fillSelect(selectVillage, list);
});

selectVillage.addEventListener('change', () => {
  const [cityName, cityValue] = selectedOption(selectVillage);
  coordinates = cityValue;
  [
    deliveryPoint.distance,
    deliveryPoint.price,
    deliveryPoint.pricePerKm,
  ] = mapAPI(coordinates);
  deliveryPoint.city = cityName;
});

const postBtn = document.getElementById('send');

postBtn.addEventListener('click', async function () {
  this.textContent = 'Загрузка';
  let response = await fetch('serv.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(deliveryPoint),
  }).then(() => {
    this.textContent = 'Данные отправлены';
  });
});
