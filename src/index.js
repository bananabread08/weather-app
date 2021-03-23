const getWeatherData = async () => {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=568d16f8e8cf2516ecd7cf2bd2689610', { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) { // don't mind this errorfor now
    console.log(error);
  }
};

getWeatherData();
