import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Fjell Kino</h1>
      <nav>
        <Link to="/">Filmer</Link>
        <Link to="/about">Om Oss</Link>
        <Link to="/upcomingMovies">Kommende Filmer</Link>
        <Link to="/contact">Kontakt Oss</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;
