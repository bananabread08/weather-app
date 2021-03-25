import getWeatherData from './modules/getweatherdata';
import dom from './modules/dom';

getWeatherData('Philippines');

dom.form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData(dom.input.value);
  dom.form.reset();
});
