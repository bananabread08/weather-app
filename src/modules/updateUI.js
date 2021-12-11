import Cloudy from '../assets/cloudy.svg';
import Rain from '../assets/rain.svg';
import Clear from '../assets/clear-day.svg';
import Mist from '../assets/mist.svg';
import Snow from '../assets/snow.svg';

export default function updateUI(main_data, forecast, errorEl) {
  errorEl.style.visibility = 'hidden';
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  const iconEl = document.querySelector('#weather-icon');
  const temperature = document.querySelector('.temperature');
  const humidity = document.querySelector('.humidity');
  const wind_speed = document.querySelector('.wind-speed');
  const img = document.createElement('img');
  const forecastEl = document.querySelector('.forecast');
  iconEl.append(img);
  city.textContent = main_data.city;
  country.textContent = main_data.country;
  temperature.textContent += forecast.current.feels_like;
  humidity.textContent += forecast.current.humidity;
  wind_speed.textContent += forecast.current.wind_speed;

  if (forecast.current.weather[0].main === 'Clouds') {
    iconEl.firstChild.src = Cloudy;
  } else if (forecast.current.weather[0].main === 'Rain') {
    iconEl.firstChild.src = Rain;
  } else if (forecast.current.weather[0].main === 'Clear') {
    iconEl.firstChild.src = Clear;
  } else if (forecast.current.weather[0].main === 'Mist') {
    iconEl.firstChild.src = Mist;
  } else if (forecast.current.weather[0].main === 'Snow') {
    iconEl.firstChild.src = Snow;
  }

  for (let count = 0; count <= 4; count++) {
    const div = document.createElement('div');
    let newIconEl = document.createElement('div');
    let newTemperature = document.createElement('div');
    let newHumidity = document.createElement('div');
    let newWind_speed = document.createElement('div');
    let newImg = document.createElement('img');
    newImg.setAttribute('id', 'weather-icon');
    newIconEl.append(newImg);
    newTemperature.textContent = forecast.daily[count].feels_like.day;
    newHumidity.textContent = forecast.daily[count].humidity;
    newWind_speed.textContent = forecast.daily[count].wind_speed;
    if (forecast.daily[count].weather[0].main === 'Clouds') {
      newIconEl.firstChild.src = Cloudy;
    } else if (forecast.daily[count].weather[0].main === 'Rain') {
      newIconEl.firstChild.src = Rain;
    } else if (forecast.daily[count].weather[0].main === 'Clear') {
      newIconEl.firstChild.src = Clear;
    } else if (forecast.daily[count].weather[0].main === 'Mist') {
      newIconEl.firstChild.src = Mist;
    } else if (forecast.daily[count].weather[0].main === 'Snow') {
      newIconEl.firstChild.src = Snow;
    }
    div.append(newIconEl, newTemperature, newHumidity, newWind_speed);
    forecastEl.append(div);
  }
}
