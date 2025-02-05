import { useState } from "react";
import { Link } from "react-router-dom";
import AccessibilityMenu from "./AccessibilityMenu"; // Importer menyen
import styles from "../styles/Header.module.css";
import { FaUniversalAccess } from "react-icons/fa"; // Hamburger-ikon

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>Fjell Kino</h1>
      <nav>
        <Link to="/">Filmer</Link>
        <Link to="/upcomingMovies">Kommende Filmer</Link>
        <Link to="/about">Om Oss</Link>
        <Link to="/contact">Kontakt Oss</Link>
      </nav>

      {/* Hamburger-knapp for tilgjengelighetsmenyen */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}>
        <FaUniversalAccess size={40} />
      </button>

      {/* Vis menyen kun hvis `menuOpen` er true */}
      {menuOpen && <AccessibilityMenu setMenuOpen={setMenuOpen} />}
    </header>
  );
}

export default Header;
