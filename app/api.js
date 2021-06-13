const url = './cities_bd.json'

export const citiesData = () => fetch(url)
   .then((response) => response.json())
   .then((cityList) => {
      const list = new Map();
      for (const city in cityList) {
         const element = cityList[city];
         list.set(city, element)
      }
      return list
   });