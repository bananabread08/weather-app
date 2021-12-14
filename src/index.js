import * as apiFxns from './modules/apiFunctions';
import updateUI from './modules/updateUI';
import './styles/style.css';
import './assets/background.png';

const form = document.querySelector('form');
const input = document.querySelector('#search-item');
const errorEl = document.querySelector('.error');

async function getWeatherData(location) {
  try {
    let loader = `<i class="fas fa-snowflake fa-spin fa-10x loader"></i>`;
    document.querySelector('.forecast').innerHTML = loader;
    document.querySelector('.data-container').innerHTML = loader;
    const main_data = await apiFxns.getCoords(location);
    console.log(main_data);
    const forecast = await apiFxns.getForecast(
      main_data.coord.lon,
      main_data.coord.lat
    );
    console.log(forecast);
    updateUI(main_data, forecast, errorEl);
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
