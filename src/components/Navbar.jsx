const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Delhi Weather Analytics Dashboard</h2>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "15px",
    background: "#1e3a8a",
    color: "white",
    textAlign: "center",
  },
};

export default Navbar;