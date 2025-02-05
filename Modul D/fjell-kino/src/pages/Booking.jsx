import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mockData } from "../data/movies";
import styles from "../styles/Booking.module.css";

export const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieTitle = params.get("movie");

  const selectedMovie =
    mockData.find((m) => m.title === movieTitle) || mockData[0];

  const [ticketCount, setTicketCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedMovie.price);

  useEffect(() => {
    setTotalPrice(selectedMovie.price * ticketCount);
  }, [ticketCount]);

  const handleTicketChange = (event) => {
    setTicketCount(parseInt(event.target.value));
  };

  const handleConfirmBooking = () => {
    alert(
      `Bestilling fullført!\nFilm: ${selectedMovie.title}\nAntall billetter: ${ticketCount}\nTotalpris: $${totalPrice}`
    );
  };

  return (
    <div className={styles.bookingContainer}>
      <h1 className={styles.title}>Bestill Billetter</h1>
      <p className={styles.movieTitle}>Film: {selectedMovie.title}</p>
      <p className={styles.movieTime}>
        Tidspunkt: {selectedMovie.times.join(", ")}
      </p>

      <div className={styles.formGroup}>
        <label htmlFor="tickets">Antall billetter:</label>
        <input
          type="number"
          id="tickets"
          min="1"
          max="10"
          value={ticketCount}
          onChange={handleTicketChange}
        />
      </div>

      <p className={styles.totalPrice}>Totalpris: ${totalPrice.toFixed(2)}</p>

      <button className={styles.confirmButton} onClick={handleConfirmBooking}>
        Bekreft Bestilling
      </button>
    </div>
  );
};
