import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

const API_KEY = "98da50f15c088b1bed4e11e7cbb901d9";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Manchester");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const handleSpeak = () => {
    if (weatherData) {
      const speechText = `The weather in ${weatherData.name} is currently ${
        weatherData.weather[0].description
      }
       with a temperature of ${Math.round(
         weatherData.main.temp - 273.15
       )} degrees Celsius.`;
      const speech = new SpeechSynthesisUtterance(speechText);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="App">
      <>
        <p className="instructions">1. First you look up for the city.</p>
      </>

      <SearchBar id="search-input" onCityChange={handleCityChange} />

      <>
        <p className="instructions">
          2. The city and weather will appear here.
        </p>
      </>
      <div
        className="weather-card-container "
        aria-label="The current weather and city name will appear here once you've searched for a city."
      >
        {weatherData && (
          <>
            <WeatherCard data={weatherData} />
          </>
        )}
      </div>

      <>
        <p className="instructions">
          3. Press 'Speak' if you need to hear the weather.
        </p>
      </>
      <button
        className="talk-button"
        onClick={handleSpeak}
        aria-label="Hear the weather forecast for the selected city"
      >
        Speak to listen
      </button>
    </div>
  );
}

export default App;
