import { useState } from "react";

const DateFilter = ({ onSearch }) => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <div style={styles.container}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Month (1-12)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button onClick={() => onSearch({ date, month, year })}>
        Fetch Data
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    padding: "20px",
    justifyContent: "center",
  },
};

export default DateFilter;