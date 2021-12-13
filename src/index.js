import * as apiFxns from './modules/apiFunctions';
import updateDom from './modules/updateUI';
import './styles/style.css';
import './assets/background.png';

const form = document.querySelector('form');
const input = document.querySelector('#search-item');
const errorEl = document.querySelector('.error');

async function getWeatherData(location) {
  try {
    const main_data = await apiFxns.getCoords(location);
    console.log(main_data);
    const forecast = await apiFxns.getForecast(
      main_data.coord.lon,
      main_data.coord.lat
    );
    console.log(forecast);
    updateDom(main_data, forecast, errorEl);
  } catch (error) {
    errorEl.style.visibility = 'visible';
    console.log(error);
  }
}

getWeatherData('Batac');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData(input.value);
  form.reset();
});
