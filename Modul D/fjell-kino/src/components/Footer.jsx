import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Fjell Kino AS | Fjellavegen 5357, FJELL</p>
      <p>
        Kontakt: <a href="mailto:kontakt@fjellkino.no">kontakt@fjellkino.no</a>
      </p>
    </footer>
  );
}

export default Footer;
