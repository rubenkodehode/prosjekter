import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={styles.themeToggle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
