import React, { useEffect, useState } from "react";
import "./WeatherList.css";
import axios from "axios";
import { weatherData } from "./weatherData";

const WeatherList = () => {
  // const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   // Fetch weather data from the backend
  //   axios
  //     .get("http://127.0.0.1:8000/weather_data")
  //     .then((response) => {
  //       setWeatherData(response.data.weather_data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching weather data:", error);
  //     });
  // }, []);

  // if (!weatherData) {
  //   return <p>Loading weather data...</p>;
  // }

  console.log("weatherData", weatherData);

  return (
    <div className="weather-list-wrapper">
      <h2>Weather in Cities</h2>

      <div className="weather-card-wrapper">
        {Object.entries(weatherData).map(([city, data], index) => (
          <div className="weather-card" key={index}>
            <div className="weather-card-title">
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                alt="weatherIcon"
              />
              <h3>{city}</h3>
            </div>

            <div className="weather-parameters-wrapper">
              <div className="weather-parameter-div">
                <p className="weather-parameter">Temperature</p>
                <p className="weather-values">{data.temperature_celsius} °C</p>
              </div>

              <div className="weather-parameter-div">
                <p className="weather-parameter">Condition</p>
                <p className="weather-values overflow-text">{data.weather}</p>
              </div>
              <div className="weather-parameter-div">
                <p className="weather-parameter">Feels like</p>
                <p className="weather-values">{data.feels_like_celsius} °C</p>
              </div>
              <div className="weather-parameter-div">
                <p className="weather-parameter">Last Update</p>
                <p className="weather-values">
                  {data.date} at {data.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
