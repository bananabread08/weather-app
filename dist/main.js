/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const input = document.querySelector('#search-item');\nconst form = document.querySelector('form');\n\nconst render = (data) => {\n  const location = document.querySelector('#location');\n  const weather = document.querySelector('#weather');\n  const description = document.querySelector('#description');\n  const temperature = document.querySelector('#temperature');\n  const humidity = document.querySelector('#humidity');\n  location.textContent = data.location;\n  weather.textContent = data.weather;\n  description.textContent = data.description;\n  temperature.textContent = data.temperature;\n  humidity.textContent = data.humidity;\n};\n\nconst getWeatherData = async (loc) => {\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=568d16f8e8cf2516ecd7cf2bd2689610`, { mode: 'cors' });\n    const data = await response.json();\n    const pickedData = {\n      location: data.name,\n      weather: data.weather[0].main,\n      description: data.weather[0].description,\n      temperature: data.main.temp,\n      humidity: data.main.humidity,\n    };\n    render(pickedData);\n  } catch (error) { // don't mind this errorfor now\n    console.log(error);\n  }\n};\n\ngetWeatherData('Philippines');\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  getWeatherData(input.value);\n  form.reset();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;