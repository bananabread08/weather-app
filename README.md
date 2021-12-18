# Weather App

The Weather App project for The Odin Project's Javascript track/curriculum. Version 2 (now with next 6 days Forecast).

[Live Preview here!](https://bananabread08.github.io/weather-app/)

## Overview

A Weather Web App made with VanillaJS and initially apply what I learned about Async JS and how to work with APIs via 'fetch'.

## Features & Functionality

- Fetch a location's (city/country) weather data using [Openweather API](https://openweathermap.org/).
- Display Current Weather, Temperature, and Humidity.
- Display Error if Location is not valid.
- Will update for more features like Unit Conversion and Time.

## Objectives & Outcomes

Previous lesson is about Async JS and APIs. Learned about Async and Await and how to apply them in a real world Web Application such as this app. Fetching Data from APIs is probably one the best experience I had in this journey.

## Development

Made with VanillaJS with Webpack as bundler. Got to work with APIs and learn how to fetch data from them.

Built With:

- HTML + CSS
- JavaScript
- eslint + prettier
- Webpack
- [Openweather API](https://openweathermap.org/)
- The lovely animated icons from [Bas](https://bas.dev/). Check his site!
- The Odin Project's Discord.

# Usage / Running Project Locally

1. Clone the Repository (`git clone ...`).
2. Generate an API Key from [Openweather API](https://openweathermap.org/). Free as long as you make an account.
3. Open the `apikey.js` file from `src/modules`. Paste your API key inside the single quotes.
4. `npm install` on Project Directory.
5. `npm install webpack-cli --save-dev` to install Webpack.
6. `npx webpack` to run Webpack to update `main.js`
7. Open the `index.html` to your preferred browser.
