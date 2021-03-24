const input = document.querySelector('#search-item');
const form = document.querySelector('form');

const render = (data) => {
  const location = document.querySelector('#location');
  const weather = document.querySelector('#weather');
  const description = document.querySelector('#description');
  const temperature = document.querySelector('#temperature');
  const humidity = document.querySelector('#humidity');
  location.textContent = data.location;
  weather.textContent = data.weather;
  description.textContent = data.description;
  temperature.textContent = data.temperature;
  humidity.textContent = data.humidity;
};

const getWeatherData = async (loc) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=568d16f8e8cf2516ecd7cf2bd2689610`, { mode: 'cors' });
    const data = await response.json();
    const pickedData = {
      location: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
    };
    render(pickedData);
  } catch (error) { // don't mind this errorfor now
    console.log(error);
  }
};

getWeatherData('Philippines');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData(input.value);
  form.reset();
});
