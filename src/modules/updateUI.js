import Cloudy from '../assets/cloudy.svg';
import Rain from '../assets/rain.svg';
import Clear from '../assets/clear-day.svg';
import Mist from '../assets/mist.svg';
import Snow from '../assets/snow.svg';
import Thermometer from '../assets/thermometer.svg';
import Droplet from '../assets/droplet.svg';
import Wind from '../assets/wind.svg';
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
    const primaryEl = document.createElement('div');
    primaryEl.classList.add('primary-data');
    const secondaryEl = document.createElement('div');
    secondaryEl.classList.add('secondary-data');
    const location = document.createElement('h1');
    location.classList.add('location');
    const iconEl = document.createElement('p');
    iconEl.classList.add('weather-icon');
    const img = document.createElement('img');
    //temperature
    const temperatureCont = document.createElement('div');
    temperatureCont.classList.add('temperature');
    const tempLabel = document.createElement('h2');
    const tempImg = document.createElement('img');
    tempImg.src = Thermometer;
    temperatureCont.append(tempImg, tempLabel);
    //humidity
    const humidityCont = document.createElement('div');
    humidityCont.classList.add('humidity');
    const humidityLabel = document.createElement('h2');
    const humidityImg = document.createElement('img');
    humidityImg.src = Droplet;
    humidityCont.append(humidityImg, humidityLabel);
    //windspeed
    const windSpeedCont = document.createElement('div');
    windSpeedCont.classList.add('wind-speed');
    const windSpeedLabel = document.createElement('h2');
    const windSpeedImg = document.createElement('img');
    windSpeedImg.src = Wind;
    windSpeedCont.append(windSpeedImg, windSpeedLabel);

    removeExistingElements(dataEl);
    removeExistingElements(iconEl);
    iconEl.append(img);
    primaryEl.append(iconEl, location);
    secondaryEl.append(temperatureCont, humidityCont, windSpeedCont);
    location.textContent = main_data.city + ', ' + main_data.country;
    tempLabel.textContent = forecast.current.temp + ' K';
    humidityLabel.textContent = forecast.current.humidity + '%';
    windSpeedLabel.textContent = forecast.current.wind_speed + ' kph';
    dataEl.append(primaryEl, secondaryEl);
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
      newTemperature.textContent = forecast.daily[count].feels_like.day + ' K';
      newHumidity.textContent = forecast.daily[count].humidity + '%';
      newWindSpeed.textContent = forecast.daily[count].wind_speed + ' kph';
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
