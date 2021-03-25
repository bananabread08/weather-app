const dom = (() => {
  const input = document.querySelector('#search-item');
  const form = document.querySelector('form');
  const locationEl = document.querySelector('#location');
  // const weatherEl = document.querySelector('#weather');
  const descriptionEl = document.querySelector('#description');
  const temperatureEl = document.querySelector('#temperature');
  const humidityEl = document.querySelector('#humidity');
  const iconEl = document.querySelector('#weather-icon');
  const img = document.createElement('img');
  const errorEl = document.querySelector('.error');
  iconEl.appendChild(img);
  return {
    input,
    form,
    locationEl,
    // weatherEl,
    descriptionEl,
    temperatureEl,
    humidityEl,
    iconEl,
    errorEl,
  };
})();

export default dom;
