import React, { useEffect, useState } from "react";
import "./WeatherList.css";
import axios from "axios";

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data from the backend
    axios
      .get("http://127.0.0.1:8000/weather_data")
      .then((response) => {
        setWeatherData(response.data.weather_data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  console.log("weatherData", weatherData);

  return (
    <div className="weather-list-wrapper">
      <h2>Weather in Cities</h2>

      <div className="weather-card-wrapper">
        {Object.entries(weatherData).map(([city, data], index) => (
          <div className="weather-card" key={index}>
            <h3>{city}</h3>
            <p>Temperature: {data.temperature_celsius} °C</p>
            <p>Feels Like: {data.feels_like_celsius} °C</p>
            <p>Condition: {data.weather}</p>
            <p>Dt: {data.dt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
