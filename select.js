const selectRegion = document.querySelector('#calc-region');
const selectVillage = document.querySelector('#calc-village');

fetch('./cities_bd.json')
  .then((response) => response.json())
  .then((cityList) => {
    const cities = Object.entries(cityList);
    for (let i = 0; i < cities.length; i++) {
      let option = document.createElement('option');
      option.value = cities[i][1];
      option.textContent = cities[i][0];
      selectRegion.append(option);
    }
  });

selectRegion.addEventListener('change', () => {
  console.log(selectRegion.value);
});
