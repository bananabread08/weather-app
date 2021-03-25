import dom from './dom';
import updateIcon from './updateicon';

export default function displayController(data) {
  updateIcon(data.weather);
  dom.locationEl.textContent = data.location;
  // dom.weatherEl.textContent = data.weather;
  dom.descriptionEl.textContent = data.description;
  dom.temperatureEl.textContent = `Temperature: ${data.temperature} °K`;
  dom.humidityEl.textContent = `Humidity: ${data.humidity}`;
}
