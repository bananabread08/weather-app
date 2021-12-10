import * as apiFxns from './modules/apiFunctions';
//import dom from './modules/dom';
import './styles/style.css';
import './assets/background.png';

const form = document.querySelector('form');
const input = document.querySelector('#search-item');
const errorEl = document.querySelector('.error');
const city = document.querySelector('#city');
const country = document.querySelector('#country');

async function getWeatherData(location) {
  try {
    errorEl.style.visibility = 'hidden';
    const main_data = await apiFxns.getCoords(location);
    console.log(main_data);
    city.textContent = main_data.city;
    country.textContent = main_data.country;
    const forecast = await apiFxns.getForecast(
      main_data.coord.lon,
      main_data.coord.lat
    );
    console.log(forecast);
  } catch (error) {
    console.log(error);
    errorEl.style.visibility = 'visible';
  }
}

getWeatherData('Batac');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData(input.value);
  form.reset();
});
