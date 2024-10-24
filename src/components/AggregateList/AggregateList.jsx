import React, { useState } from "react";

export const AggregateList = () => {
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

  return <div>AggregateList</div>;
};
