import retrieveApiKey from './apikey';
import displayController from './displaycontroller';

export default async function getWeatherData(location) {
  try {
    const API_KEY = retrieveApiKey();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`, { mode: 'cors' });
    const data = await response.json();
    const pickedData = {
      location: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
    };
    displayController(pickedData);
  } catch (error) { // don't mind this errorfor now
    console.log('Invalid Location');
  }
}
