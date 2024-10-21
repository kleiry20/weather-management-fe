import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState(""); // State to store the city input
  const [weatherData, setWeatherData] = useState(null); // State to store fetched weather data
  const [error, setError] = useState(""); // State to handle errors

  const handleInputChange = (e) => {
    setCity(e.target.value); // Update city state on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset any previous errors

    try {
      const response = await axios.get(`http://127.0.0.1:8000/weather/${city}`);
      setWeatherData(response.data); // Update weather data with response
    } catch (err) {
      setError("Error fetching weather data."); // Handle any errors
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>} {/* Display error if any */}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature_celsius} °C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
