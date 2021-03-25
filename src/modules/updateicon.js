import dom from './dom';

export default function updateIcon(weatherType) {
  if (weatherType === 'Clouds') {
    dom.iconEl.innerHTML = '<i class="fas fa-cloud"></i>';
    // bg: '#4c94fb ' };
  } else if (weatherType === 'Rain') {
    dom.iconEl.innerHTML = '<i class="fas fa-cloud-rain"></i>';
  } else if (weatherType === 'Clear') {
    dom.iconEl.innerHTML = '<i class="fas fa-sun"></i>';
  } else if (weatherType === 'Mist') {
    dom.iconEl.innerHTML = '<i class="fas fa-smog"></i>';
  } else if (weatherType === 'Snow') {
    dom.iconEl.innerHTML = '<i class="far fa-snowflake"></i>';
  }
  // bg: '#39629e' };
  // bg: '#e1e3cf' };
  // bg: '#7cc7d9' };
  // bg: '#5c7494 ' };
}
