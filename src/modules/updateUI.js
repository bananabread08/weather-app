import Cloudy from '../assets/cloudy.svg';
import Rain from '../assets/rain.svg';
import Clear from '../assets/clear-day.svg';
import Mist from '../assets/mist.svg';
import Snow from '../assets/snow.svg';
import Thermometer from '../assets/thermometer.svg';
import Droplet from '../assets/droplet.svg';
import Wind from '../assets/droplet.svg';
const updateIcon = (element, weatherType) => {
  if (weatherType === 'Clouds') {
    element.firstChild.src = Cloudy;
  } else if (weatherType === 'Rain') {
    element.firstChild.src = Rain;
  } else if (weatherType === 'Clear') {
    element.firstChild.src = Clear;
  } else if (weatherType === 'Mist') {
    element.firstChild.src = Mist;
  } else if (weatherType === 'Snow') {
    element.firstChild.src = Snow;
  }
};

// helper to remove previously searched Forecast elements
const removeExistingElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

// helper to create weather elements for CurrentWeather or Forecast
const createElements = (main_data, forecast, mode) => {
  if (mode) {
    const dataEl = document.querySelector('.data-container');
    const city = document.createElement('div');
    city.classList.add('city');
    const country = document.createElement('div');
    country.classList.add('country');
    const iconEl = document.createElement('p');
    iconEl.classList.add('weather-icon');
    const img = document.createElement('img');
    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    // const tempImg = document.createElement('img');
    // tempImg.src = Thermometer;
    // temperature.append(tempImg);
    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    const windSpeed = document.createElement('div');
    windSpeed.classList.add('wind-speed');
    removeExistingElements(dataEl);
    removeExistingElements(iconEl);
    iconEl.append(img);
    city.textContent = main_data.city;
    country.textContent = main_data.country;
    temperature.textContent = forecast.current.temp;
    humidity.textContent = forecast.current.humidity;
    windSpeed.textContent = forecast.current.windSpeed;
    dataEl.append(city, country, iconEl, temperature, humidity, windSpeed);
    updateIcon(iconEl, forecast.current.weather[0].main);
  } else {
    const forecastEl = document.querySelector('.forecast');
    removeExistingElements(forecastEl);
    for (let count = 0; count <= 5; count++) {
      const div = document.createElement('div');
      div.classList.add('forecast-box');
      const newIconEl = document.createElement('div');
      const newTemperature = document.createElement('div');
      const newHumidity = document.createElement('div');
      const newWindSpeed = document.createElement('div');
      const newImg = document.createElement('img');
      newImg.classList.add('weather-icon');
      newIconEl.append(newImg);
      newTemperature.textContent = forecast.daily[count].feels_like.day;
      newHumidity.textContent = forecast.daily[count].humidity;
      newWindSpeed.textContent = forecast.daily[count].windSpeed;
      updateIcon(newIconEl, forecast.daily[count].weather[0].main);
      div.append(newIconEl, newTemperature, newHumidity, newWindSpeed);
      forecastEl.append(div);
    }
  }
};

export default function updateUI(main_data, forecast, errorEl) {
  errorEl.style.visibility = 'hidden';
  let mode = true; //true for Current Weather, false for Forecast
  createElements(main_data, forecast, mode);
  createElements(main_data, forecast, (mode = false));
}
