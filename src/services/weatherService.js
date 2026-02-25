import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getWeatherByDate = async (date) => {
  const response = await axios.get(`${API_BASE}/weather?date=${date}`);
  return response.data;
};

export const getWeatherByMonth = async (month) => {
  const response = await axios.get(`${API_BASE}/weather?month=${month}`);
  return response.data;
};

export const getMonthlyStats = async (year) => {
  const response = await axios.get(`${API_BASE}/weather/stats?year=${year}`);
  return response.data;
};