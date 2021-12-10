import retrieveApiKey from './apikey';

async function getForecast(lon, lat) {
  try {
    const API_KEY = retrieveApiKey();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    //dom.errorEl.style.visibility = 'visible';
  }
}

export default async function getWeatherData(location) {
  try {
    const API_KEY = retrieveApiKey();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    const { lon, lat } = data.coord;
    getForecast(lon, lat);
  } catch (error) {
    console.log(error);
    //dom.errorEl.style.visibility = 'visible';
  }
}
