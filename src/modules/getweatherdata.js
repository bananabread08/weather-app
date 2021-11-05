import retrieveApiKey from './apikey';
//import displayController from './displaycontroller';
//import dom from './dom';

export default async function getWeatherData(location) {
  try {
    const API_KEY = retrieveApiKey();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);
    // console.log(data.sys.country);
    const pickedData = {
      location: data.name,
      countryCode: data.sys.country,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
    };
    displayController(pickedData);
  } catch (error) {
    dom.errorEl.style.visibility = 'visible';
  }
}
