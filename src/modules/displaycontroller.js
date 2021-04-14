import dom from './dom';
import updateIcon from './updateicon';
import convertUnits from './convertunits';
import Thermometer from '../assets/thermometer.svg';
import Droplet from '../assets/droplet.svg';

export default function displayController(data) {
  dom.errorEl.style.visibility = 'hidden';
  updateIcon(data.weather);
  const convertedTemp = convertUnits(data.temperature);
  if (data.countryCode === undefined) {
    dom.locationEl.innerHTML = `${data.location}`;
  } else {
    dom.locationEl.innerHTML = `${data.location}, ${data.countryCode} <img src="http://openweathermap.org/images/flags/${data.countryCode.toLowerCase()}.png"/>`;
  }
  // dom.weatherEl.textContent = data.weather;
  dom.descriptionEl.textContent = data.description;
  dom.temperatureEl.innerHTML = `<img src="${Thermometer}" alt="temperature"> :  ${convertedTemp}°C`;
  dom.humidityEl.innerHTML = `<img src="${Droplet}"> :  ${data.humidity}%`;
}
