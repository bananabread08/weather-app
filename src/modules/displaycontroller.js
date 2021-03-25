import dom from './dom';
import updateIcon from './updateicon';

export default function displayController(data) {
  dom.errorEl.style.visibility = 'hidden';
  updateIcon(data.weather);
  if (data.countryCode === undefined) {
    dom.locationEl.innerHTML = `${data.location}`;
  } else {
    dom.locationEl.innerHTML = `${data.location}, ${data.countryCode}`;
  }
  // dom.weatherEl.textContent = data.weather;
  dom.descriptionEl.textContent = data.description;
  dom.temperatureEl.textContent = `Temperature: ${data.temperature} °K`;
  dom.humidityEl.textContent = `Humidity: ${data.humidity}%`;
}
