import React from "react";
import styles from "../styles/Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        <form className={styles.contactForm}>
          <h2>Kontakt oss</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Navn:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-post:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Melding:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button className={styles.sendButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
