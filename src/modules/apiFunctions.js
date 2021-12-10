import retrieveApiKey from './apikey';

async function getForecast(lon, lat) {
  try {
    const API_KEY = retrieveApiKey();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getCoords(location) {
  try {
    const API_KEY = retrieveApiKey();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    return {
      coord: data.coord,
      city: data.name,
      country: data.sys.country,
    };
  } catch (error) {
    console.log(error);
    //dom.errorEl.style.visibility = 'visible';
  }
}

export { getCoords, getForecast };
