const API_KEY = '568d16f8e8cf2516ecd7cf2bd2689610';

async function getForecast(lon, lat) {
  try {
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
  }
}

export { getCoords, getForecast };
