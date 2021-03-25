import dom from './dom';

export default function updateIcon(weatherType) {
  if (weatherType === 'Clouds') {
    dom.iconEl.firstChild.src = 'assets/cloudy.svg';
  } else if (weatherType === 'Rain') {
    dom.iconEl.firstChild.src = 'assets/rain.svg';
  } else if (weatherType === 'Clear') {
    dom.iconEl.firstChild.src = 'assets/clear-day.svg';
  } else if (weatherType === 'Mist') {
    dom.iconEl.firstChild.src = 'assets/mist.svg';
  } else if (weatherType === 'Snow') {
    dom.iconEl.firstChild.src = 'asset/snow.svg';
  }
}
