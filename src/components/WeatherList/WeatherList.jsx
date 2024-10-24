import React, { useEffect, useState } from "react";
import "./WeatherList.css";
import axios from "axios";
// import { weatherData } from "./weatherData";

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState(null);

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

  // useEffect(() => {
  //   const socket = new WebSocket("ws://localhost:8000/ws"); // Adjust port if necessary

  //   socket.onmessage = (event) => {
  //     const newWeatherData = JSON.parse(event.data);
  //     setWeatherData((prevData) => ({
  //       ...prevData,
  //       ...newWeatherData,
  //     }));
  //   };

  //   return () => {
  //     socket.close(); // Clean up on component unmount
  //   };
  // }, []);

  // console.log("weatherData", weatherData);

  let websocket;

  function connect() {
    websocket = new WebSocket("ws://localhost:8000/ws");
    websocket.onopen = function () {
      console.log("Connection opened");
    };
    websocket.onmessage = function (event) {
      console.log("Received data:", event.data); // Log the incoming data
      const messages = document.getElementById("messages");
      const message = document.createElement("li");
      message.textContent = JSON.stringify(event.data); // Display received data
      messages.appendChild(message);
    };
    websocket.onclose = function () {
      console.log("Connection closed");
    };
  }

  return (
    <div className="weather-list-wrapper">
      <h2>Weather in Cities</h2>

      {weatherData && (
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
                  <p className="weather-values">
                    {data.temperature_celsius} °C
                  </p>
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
      )}
    </div>
  );
};

export default WeatherList;
