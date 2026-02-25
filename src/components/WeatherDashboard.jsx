import React, { useState } from "react";

function WeatherDashboard() {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    if (!date) return;

    const selectedDate = new Date(date);
    const month = selectedDate.getMonth(); // 0-11

    let temperature;

    if (month >= 0 && month <= 2) {
      temperature = 35; // Jan-Mar
    } 
    else if (month >= 3 && month <= 4) {
      temperature = 37; // Apr-May
    } 
    else if (month >= 6 && month <= 11) {
      const temps = [23, 22, 21, 20];
      temperature = temps[(month - 6) % 4];
    } 
    else {
      temperature = 36; // default
    }

    setWeather({
      temperature,
      humidity: 60
    });
  };

  return (
    <div className="weather-card">
      <h1 className="main-title">Delhi Weather Dashboard</h1>

      <h2>Search Weather by Date</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSearch}>
        Get Weather
      </button>

      {weather && (
        <div>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Humidity: {weather.humidity} %</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;