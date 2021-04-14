import getWeatherData from './modules/getweatherdata';
import dom from './modules/dom';
import './styles/style.css'
import './assets/background.png'

getWeatherData('Philippines');

dom.form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData(dom.input.value);
  dom.form.reset();
});
