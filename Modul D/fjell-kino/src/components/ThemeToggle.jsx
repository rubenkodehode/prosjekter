import { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <DarkModeToggle
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      checked={theme === "dark"}
      size={80}
    />
  );
}

export default ThemeToggle;
