const MonthlyStats = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h3>Monthly Temperature Stats</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Month</th>
            <th>High</th>
            <th>Median</th>
            <th>Min</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.high}</td>
              <td>{item.median}</td>
              <td>{item.min}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyStats;