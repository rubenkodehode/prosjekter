import { useContext } from "react";
import { AccessibilityContext } from "../context/AccessibilityContext";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/AccessibilityMenu.module.css";
import { FaTimes } from "react-icons/fa"; // Importerer lukkeknapp-ikon

function AccessibilityMenu({ setMenuOpen }) {
  const { fontSize, setFontSize, highContrast, setHighContrast } =
    useContext(AccessibilityContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.menu}>
      {/* Lukkeknapp */}
      <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
        <FaTimes size={20} />
      </button>

      <h3>Tilgjengelighet</h3>

      {/* Dark Mode Toggle */}
      <div className={styles.setting}>
        <span>🌙 Nattmodus</span>
        <ThemeToggle />
      </div>

      {/* Høy Kontrast Toggle */}
      <button onClick={() => setHighContrast(!highContrast)}>
        {highContrast ? "🔳 Normal Kontrast" : "⚫ Høy Kontrast"}
      </button>

      {/* Fontstørrelse */}
      <div className={styles.fontControls}>
        <span>Skriftstørrelse:</span>
        <button onClick={() => setFontSize("small")}>A-</button>
        <button onClick={() => setFontSize("medium")}>A</button>
        <button onClick={() => setFontSize("large")}>A+</button>
      </div>
    </div>
  );
}

export default AccessibilityMenu;
