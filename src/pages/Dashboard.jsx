import { useState } from "react";
import Navbar from "../components/Navbar";
import DateFilter from "../components/DateFilter";
import WeatherCard from "../components/WeatherCard";
import MonthlyStats from "../components/MonthlyStats";
import TemperatureChart from "../components/TemperatureChart";
import {
  getWeatherByDate,
  getWeatherByMonth,
  getMonthlyStats,
} from "../services/weatherService";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [stats, setStats] = useState([]);

  const handleSearch = async ({ date, month, year }) => {
    try {
      if (date) {
        const data = await getWeatherByDate(date);
        setWeather(data);
      }

      if (month) {
        const data = await getWeatherByMonth(month);
        setWeather(data);
      }

      if (year) {
        const data = await getMonthlyStats(year);
        setStats(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <DateFilter onSearch={handleSearch} />
      <WeatherCard data={weather} />
      <MonthlyStats stats={stats} />
      <TemperatureChart data={stats} />
    </>
  );
};

export default Dashboard;