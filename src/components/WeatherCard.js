import React from 'react';

function WeatherCard({ data }) {
  if (!data || !data.main || !data.weather) {
    return <p>Loading...</p>;
  }

  const { name, main, weather } = data;
  const temp = main.temp - 273.15; // Convert from Kelvin to Celsius

  return (
    
    
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>{temp.toFixed(1)}°C</p>
    </div>
  );
}

export default WeatherCard;