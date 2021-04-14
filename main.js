/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getweatherdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getweatherdata */ \"./src/modules/getweatherdata.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n(0,_modules_getweatherdata__WEBPACK_IMPORTED_MODULE_0__.default)('Philippines');\n\n_modules_dom__WEBPACK_IMPORTED_MODULE_1__.default.form.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_getweatherdata__WEBPACK_IMPORTED_MODULE_0__.default)(_modules_dom__WEBPACK_IMPORTED_MODULE_1__.default.input.value);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__.default.form.reset();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/apikey.js":
/*!*******************************!*\
  !*** ./src/modules/apikey.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveApiKey)\n/* harmony export */ });\nfunction retrieveApiKey() {\n  return '568d16f8e8cf2516ecd7cf2bd2689610';\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/apikey.js?");

/***/ }),

/***/ "./src/modules/convertunits.js":
/*!*************************************!*\
  !*** ./src/modules/convertunits.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ convertUnits)\n/* harmony export */ });\nfunction convertUnits(temperature) {\n  const temp = temperature - 273.15;\n  return temp.toFixed(1);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/convertunits.js?");

/***/ }),

/***/ "./src/modules/displaycontroller.js":
/*!******************************************!*\
  !*** ./src/modules/displaycontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayController)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _updateicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateicon */ \"./src/modules/updateicon.js\");\n/* harmony import */ var _convertunits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convertunits */ \"./src/modules/convertunits.js\");\n\n\n\n\nfunction displayController(data) {\n  _dom__WEBPACK_IMPORTED_MODULE_0__.default.errorEl.style.visibility = 'hidden';\n  (0,_updateicon__WEBPACK_IMPORTED_MODULE_1__.default)(data.weather);\n  const convertedTemp = (0,_convertunits__WEBPACK_IMPORTED_MODULE_2__.default)(data.temperature);\n  if (data.countryCode === undefined) {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.locationEl.innerHTML = `${data.location}`;\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.locationEl.innerHTML = `${data.location}, ${data.countryCode} <img src=\"http://openweathermap.org/images/flags/${data.countryCode.toLowerCase()}.png\"/>`;\n  }\n  // dom.weatherEl.textContent = data.weather;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.default.descriptionEl.textContent = data.description;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.default.temperatureEl.innerHTML = `<img src=\"assets/thermometer.svg\" alt=\"temperature\"> :  ${convertedTemp}°C`;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.default.humidityEl.innerHTML = `<img src=\"assets/droplet.svg\"> :  ${data.humidity}%`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/displaycontroller.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\n  const input = document.querySelector('#search-item');\n  const form = document.querySelector('form');\n  const locationEl = document.querySelector('#location');\n  // const weatherEl = document.querySelector('#weather');\n  const descriptionEl = document.querySelector('#description');\n  const temperatureEl = document.querySelector('#temperature');\n  const humidityEl = document.querySelector('#humidity');\n  const iconEl = document.querySelector('#weather-icon');\n  const img = document.createElement('img');\n  const errorEl = document.querySelector('.error');\n  iconEl.appendChild(img);\n  return {\n    input,\n    form,\n    locationEl,\n    // weatherEl,\n    descriptionEl,\n    temperatureEl,\n    humidityEl,\n    iconEl,\n    errorEl,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/getweatherdata.js":
/*!***************************************!*\
  !*** ./src/modules/getweatherdata.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\n/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ \"./src/modules/apikey.js\");\n/* harmony import */ var _displaycontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaycontroller */ \"./src/modules/displaycontroller.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n\n\nasync function getWeatherData(location) {\n  try {\n    const API_KEY = (0,_apikey__WEBPACK_IMPORTED_MODULE_0__.default)();\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`, { mode: 'cors' });\n    const data = await response.json();\n    console.log(data);\n    // console.log(data.sys.country);\n    const pickedData = {\n      location: data.name,\n      countryCode: data.sys.country,\n      weather: data.weather[0].main,\n      description: data.weather[0].description,\n      temperature: data.main.temp,\n      humidity: data.main.humidity,\n    };\n    (0,_displaycontroller__WEBPACK_IMPORTED_MODULE_1__.default)(pickedData);\n  } catch (error) {\n    _dom__WEBPACK_IMPORTED_MODULE_2__.default.errorEl.style.visibility = 'visible';\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/getweatherdata.js?");

/***/ }),

/***/ "./src/modules/updateicon.js":
/*!***********************************!*\
  !*** ./src/modules/updateicon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateIcon)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\nfunction updateIcon(weatherType) {\n  if (weatherType === 'Clouds') {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.iconEl.firstChild.src = 'assets/cloudy.svg';\n  } else if (weatherType === 'Rain') {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.iconEl.firstChild.src = 'assets/rain.svg';\n  } else if (weatherType === 'Clear') {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.iconEl.firstChild.src = 'assets/clear-day.svg';\n  } else if (weatherType === 'Mist') {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.iconEl.firstChild.src = 'assets/mist.svg';\n  } else if (weatherType === 'Snow') {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.default.iconEl.firstChild.src = 'asset/snow.svg';\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/updateicon.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;