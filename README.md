# Weather App

This is a weather app made with React that retrieves current weather data from the OpenWeatherMap API and displays it for a given city. It also has a text-to-speech feature that allows users to hear the current weather for the selected city.

## Installation

To install and run the app locally:

1. Clone the repository: `git clone https://github.com/Alex-003/weather-app.git`
2. Install dependencies: `npm install`
3. Set up an account on [OpenWeatherMap](https://openweathermap.org/) and get an API key.
4. In the `App.js` file, replace the `API_KEY` variable with your own API key.
5. Run the app: `npm start`

## Usage

1. Enter a city name in the search bar.
2. The current weather and city name will be displayed on the screen.
3. Press the "Speak to listen" button to hear the weather forecast for the selected city.

## Built with

- React
- OpenWeatherMap API
- SpeechSynthesisUtterance
- HTML/CSS
- Jest/Babel

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- The [OpenWeatherMap](https://openweathermap.org/) API for providing the weather data.
- The [React documentation](https://reactjs.org/docs/getting-started.html) for guidance on building a React app.
- The [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for information on the Web Speech API.
