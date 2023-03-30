import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const API_KEY = '98da50f15c088b1bed4e11e7cbb901d9';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Manchester');

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
        <SearchBar onCityChange={handleCityChange} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;