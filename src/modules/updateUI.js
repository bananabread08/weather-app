import Cloudy from '../assets/cloudy.svg';
import Rain from '../assets/rain.svg';
import Clear from '../assets/clear-day.svg';
import Mist from '../assets/mist.svg';
import Snow from '../assets/snow.svg';

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

export default function updateUI(main_data, forecast, errorEl) {
  errorEl.style.visibility = 'hidden';
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const iconEl = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const humidity = document.querySelector('.humidity');
  const wind_speed = document.querySelector('.wind-speed');
  const img = document.createElement('img');
  const forecastEl = document.querySelector('.forecast');
  removeExistingElements(iconEl);
  removeExistingElements(forecastEl);
  iconEl.append(img);
  city.textContent = main_data.city;
  country.textContent = main_data.country;
  temperature.textContent = forecast.current.temp;
  humidity.textContent = forecast.current.humidity;
  wind_speed.textContent = forecast.current.wind_speed;
  updateIcon(iconEl, forecast.current.weather[0].main);

  // when searching a new location, new boxes are appended.
  for (let count = 0; count <= 5; count++) {
    const div = document.createElement('div');
    div.classList.add('forecast-box');
    let newIconEl = document.createElement('div');
    let newTemperature = document.createElement('div');
    let newHumidity = document.createElement('div');
    let newWind_speed = document.createElement('div');
    let newImg = document.createElement('img');
    newImg.classList.add('weather-icon');
    newIconEl.append(newImg);
    newTemperature.textContent = forecast.daily[count].feels_like.day;
    newHumidity.textContent = forecast.daily[count].humidity;
    newWind_speed.textContent = forecast.daily[count].wind_speed;

    updateIcon(newIconEl, forecast.daily[count].weather[0].main);

    div.append(newIconEl, newTemperature, newHumidity, newWind_speed);
    forecastEl.append(div);
  }
}
