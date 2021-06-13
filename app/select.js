import { citiesData } from "./api.js";

const selectRegion = document.querySelector('#calc-region');
const selectVillage = document.querySelector('#calc-village');


// const selectedOption = sel => [sel.options[sel.selectedIndex].text, sel.options[sel.selectedIndex].value];

const citiesList = await citiesData();

const selectedOption = sel => [sel.options[sel.selectedIndex].text, sel.options[sel.selectedIndex].value];

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
  const optionValue = selectedOption(selectRegion)
  const [, cityValue] = optionValue;
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
    console.log(selectedOption(selectRegion))
  };
  fillSelect(selectVillage, list)
  // selectVillage.disabled = false;
});

selectVillage.addEventListener('change', () => {
  // const [, cityValue] = optionValue;
  console.log(selectedOption(selectVillage))
})