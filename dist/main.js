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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* @import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap'); */\\nhtml,\\nbody {\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#search-item {\\n  width: 90%;\\n  border: 3px solid #00b4cc;\\n  border-right: none;\\n  padding: 15px;\\n  height: 20px;\\n  border-radius: 5px 0 0 5px;\\n  outline: none;\\n  color: #95a59e;\\n  font-weight: 700;\\n}\\n#search-item:focus {\\n  color: #047483;\\n}\\n#submit {\\n  cursor: pointer;\\n  width: 36px;\\n  height: 36px;\\n  border: 1px solid #00b4cc;\\n  background: #00b4cc;\\n  text-align: center;\\n  color: #fff;\\n  border-radius: 0 5px 5px 0;\\n  font-size: 20px;\\n  position: absolute;\\n}\\n#submit:hover {\\n  color: black;\\n}\\n.error {\\n  margin-left: -20px;\\n  color: #f71515;\\n  border-radius: 5px;\\n  background-color: rgba(218, 205, 205, 0.514);\\n  visibility: hidden;\\n  transition: all 0.8s ease;\\n  font-size: 20px;\\n}\\n.loader {\\n  margin-top: 50px;\\n  margin-bottom: 50px;\\n  color: #00b4cc;\\n}\\n.data-container {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.temperature,\\n.humidity,\\n.wind-speed {\\n  display: flex;\\n  align-items: center;\\n}\\n.temperature img,\\n.humidity img,\\n.wind-speed img {\\n  max-width: 70px;\\n  max-height: 70px;\\n}\\n.weather-icon > img {\\n  min-width: 200px;\\n  min-height: 150px;\\n}\\n.forecast {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 20px;\\n}\\n.forecast-box {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  background-color: #fff;\\n  border: 4px solid #ccc;\\n  box-shadow: inset 0 0 0 4px #eee;\\n  /* And so on and so forth, if you want border-ception */\\n  margin: 0 auto;\\n  position: relative;\\n}\\n.forecast-box img {\\n  min-height: 100px;\\n  min-width: 100px;\\n}\\n\\n/* @media (max-width: 768px){\\n    .main-container{\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        height: 100%;\\n        overflow: hidden;\\n    }\\n    .data-container{\\n        margin: -5px;\\n    }\\n} */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/apiFunctions */ \"./src/modules/apiFunctions.js\");\n/* harmony import */ var _modules_updateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/updateUI */ \"./src/modules/updateUI.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/background.png */ \"./src/assets/background.png\");\n\n\n\n\n\nconst form = document.querySelector('form');\nconst input = document.querySelector('#search-item');\nconst errorEl = document.querySelector('.error');\n\nasync function getWeatherData(location) {\n  try {\n    let loader = `<i class=\"fas fa-snowflake fa-spin fa-10x loader\"></i>`;\n    document.querySelector('.forecast').innerHTML = loader;\n    document.querySelector('.data-container').innerHTML = loader;\n    const main_data = await _modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getCoords(location);\n    console.log(main_data);\n    const forecast = await _modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getForecast(\n      main_data.coord.lon,\n      main_data.coord.lat\n    );\n    console.log(forecast);\n    (0,_modules_updateUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main_data, forecast, errorEl);\n  } catch (error) {\n    errorEl.style.visibility = 'visible';\n    console.log(error);\n  }\n}\n\ngetWeatherData('Batac');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  getWeatherData(input.value);\n  form.reset();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/apiFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoords\": () => (/* binding */ getCoords),\n/* harmony export */   \"getForecast\": () => (/* binding */ getForecast)\n/* harmony export */ });\nconst API_KEY = '568d16f8e8cf2516ecd7cf2bd2689610';\n\nasync function getForecast(lon, lat) {\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`,\n      { mode: 'cors' }\n    );\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nasync function getCoords(location) {\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,\n      { mode: 'cors' }\n    );\n    const data = await response.json();\n    return {\n      coord: data.coord,\n      city: data.name,\n      country: data.sys.country,\n    };\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/apiFunctions.js?");

/***/ }),

/***/ "./src/modules/updateUI.js":
/*!*********************************!*\
  !*** ./src/modules/updateUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/cloudy.svg */ \"./src/assets/cloudy.svg\");\n/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/rain.svg */ \"./src/assets/rain.svg\");\n/* harmony import */ var _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/clear-day.svg */ \"./src/assets/clear-day.svg\");\n/* harmony import */ var _assets_mist_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mist.svg */ \"./src/assets/mist.svg\");\n/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/snow.svg */ \"./src/assets/snow.svg\");\n/* harmony import */ var _assets_thermometer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/thermometer.svg */ \"./src/assets/thermometer.svg\");\n/* harmony import */ var _assets_droplet_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/droplet.svg */ \"./src/assets/droplet.svg\");\n/* harmony import */ var _assets_windsock_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/windsock.svg */ \"./src/assets/windsock.svg\");\n\n\n\n\n\n\n\n\nconst updateIcon = (element, weatherType) => {\n  if (weatherType === 'Clouds') {\n    element.firstChild.src = _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_0__;\n  } else if (weatherType === 'Rain') {\n    element.firstChild.src = _assets_rain_svg__WEBPACK_IMPORTED_MODULE_1__;\n  } else if (weatherType === 'Clear') {\n    element.firstChild.src = _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_2__;\n  } else if (weatherType === 'Mist') {\n    element.firstChild.src = _assets_mist_svg__WEBPACK_IMPORTED_MODULE_3__;\n  } else if (weatherType === 'Snow') {\n    element.firstChild.src = _assets_snow_svg__WEBPACK_IMPORTED_MODULE_4__;\n  }\n};\n\n// helper to remove previously searched Forecast elements\nconst removeExistingElements = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\n// helper to create weather elements for CurrentWeather or Forecast\nconst createElements = (main_data, forecast, mode) => {\n  if (mode) {\n    const dataEl = document.querySelector('.data-container');\n    const city = document.createElement('div');\n    city.classList.add('city');\n    const country = document.createElement('div');\n    country.classList.add('country');\n    const iconEl = document.createElement('p');\n    iconEl.classList.add('weather-icon');\n    const img = document.createElement('img');\n\n    //temperature\n    const temperatureCont = document.createElement('div');\n    temperatureCont.classList.add('temperature');\n    const tempLabel = document.createElement('h2');\n    const tempImg = document.createElement('img');\n    tempImg.src = _assets_thermometer_svg__WEBPACK_IMPORTED_MODULE_5__;\n    temperatureCont.append(tempImg, tempLabel);\n\n    //humidity\n    const humidityCont = document.createElement('div');\n    humidityCont.classList.add('humidity');\n    const humidityLabel = document.createElement('h2');\n    const humidityImg = document.createElement('img');\n    humidityImg.src = _assets_droplet_svg__WEBPACK_IMPORTED_MODULE_6__;\n    humidityCont.append(humidityImg, humidityLabel);\n\n    //windspeed\n    const windSpeedCont = document.createElement('div');\n    windSpeedCont.classList.add('wind-speed');\n    const windSpeedLabel = document.createElement('h2');\n    const windSpeedImg = document.createElement('img');\n    windSpeedImg.src = _assets_windsock_svg__WEBPACK_IMPORTED_MODULE_7__;\n    windSpeedCont.append(windSpeedImg, windSpeedLabel);\n\n    removeExistingElements(dataEl);\n    removeExistingElements(iconEl);\n    iconEl.append(img);\n    city.textContent = main_data.city;\n    country.textContent = main_data.country;\n    tempLabel.textContent = forecast.current.temp + ' K';\n    humidityLabel.textContent = forecast.current.humidity + '%';\n    windSpeedLabel.textContent = forecast.current.wind_speed + ' mph';\n    dataEl.append(\n      city,\n      country,\n      iconEl,\n      temperatureCont,\n      humidityCont,\n      windSpeedCont\n    );\n    updateIcon(iconEl, forecast.current.weather[0].main);\n  } else {\n    const forecastEl = document.querySelector('.forecast');\n    removeExistingElements(forecastEl);\n    for (let count = 0; count <= 5; count++) {\n      const div = document.createElement('div');\n      div.classList.add('forecast-box');\n      const newIconEl = document.createElement('div');\n      const newTemperature = document.createElement('div');\n      const newHumidity = document.createElement('div');\n      const newWindSpeed = document.createElement('div');\n      const newImg = document.createElement('img');\n      newImg.classList.add('weather-icon');\n      newIconEl.append(newImg);\n      newTemperature.textContent = forecast.daily[count].feels_like.day;\n      newHumidity.textContent = forecast.daily[count].humidity;\n      newWindSpeed.textContent = forecast.daily[count].wind_speed;\n      updateIcon(newIconEl, forecast.daily[count].weather[0].main);\n      div.append(newIconEl, newTemperature, newHumidity, newWindSpeed);\n      forecastEl.append(div);\n    }\n  }\n};\n\nfunction updateUI(main_data, forecast, errorEl) {\n  errorEl.style.visibility = 'hidden';\n  let mode = true; //true for Current Weather, false for Forecast\n  createElements(main_data, forecast, mode);\n  createElements(main_data, forecast, (mode = false));\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/updateUI.js?");

/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c808852490e8fe1cd868.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/background.png?");

/***/ }),

/***/ "./src/assets/clear-day.svg":
/*!**********************************!*\
  !*** ./src/assets/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4c4355e2a18518debe0.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/clear-day.svg?");

/***/ }),

/***/ "./src/assets/cloudy.svg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de69dd61d92e66725433.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/cloudy.svg?");

/***/ }),

/***/ "./src/assets/droplet.svg":
/*!********************************!*\
  !*** ./src/assets/droplet.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"318b66f352a5c6fdc0d2.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/droplet.svg?");

/***/ }),

/***/ "./src/assets/mist.svg":
/*!*****************************!*\
  !*** ./src/assets/mist.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7afb7b8aa72bd48337e7.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/mist.svg?");

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06e6870ae5f6dff6373a.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/rain.svg?");

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a692426aeca367a80d6a.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/snow.svg?");

/***/ }),

/***/ "./src/assets/thermometer.svg":
/*!************************************!*\
  !*** ./src/assets/thermometer.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"530d26cc52197e823c9f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/thermometer.svg?");

/***/ }),

/***/ "./src/assets/windsock.svg":
/*!*********************************!*\
  !*** ./src/assets/windsock.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2222978583d2f4f75a7.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/windsock.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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