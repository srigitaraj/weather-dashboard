const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div style={styles.card}>
      <h3>Weather Details</h3>
      <p>Condition: {data.condition}</p>
      <p>Temperature: {data.temperature} °C</p>
      <p>Humidity: {data.humidity} %</p>
      <p>Pressure: {data.pressure} hPa</p>
    </div>
  );
};

const styles = {
  card: {
    margin: "20px auto",
    padding: "20px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export default WeatherCard;