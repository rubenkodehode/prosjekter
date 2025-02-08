import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mockData } from "../data/movies";
import styles from "../styles/Booking.module.css";

export const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieTitle = params.get("movieTitle");

  console.log("Hentet movieTitle:", movieTitle);

  // Finn valgt film i mockData
  const selectedMovie = mockData.find((m) => m.title === movieTitle) || mockData[0];

    console.log("Valgt film:", selectedMovie);

  // States for antall billetter og totalpris
  const [ticketCount, setTicketCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedMovie.price);

  // Oppdater totalpris når antall billetter endres
  useEffect(() => {
    setTotalPrice(selectedMovie.price * ticketCount);
  }, [ticketCount]);

  // Funksjon for å håndtere endring i antall billetter
  const handleTicketChange = (event) => {
    setTicketCount(parseInt(event.target.value));
  };

  // Funksjon for å bekrefte bestilling
  const handleConfirmBooking = () => {
    alert(`Bestilling fullført!\nFilm: ${selectedMovie.title}\nAntall billetter: ${ticketCount}\nTotalpris: $${totalPrice}`);
  };

  return (
    <div 
      className={styles.bookingContainer} 
      style={{ backgroundImage: `url(${selectedMovie.poster})` }}
    >
      <div className={styles.bookingBox}>
        <h1>Bestill Billetter</h1>
        <p className={styles.movieTitle}><strong>Film:</strong> {selectedMovie.title}</p>
        <p className={styles.movieTime}><strong>Tidspunkt:</strong> {selectedMovie.times.join(", ")}</p>

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

        <p className={styles.totalPrice}><strong>Totalpris:</strong> ${totalPrice.toFixed(2)}</p>

        <button className={styles.confirmButton} onClick={handleConfirmBooking}>
          Bekreft Bestilling
        </button>
      </div>
    </div>
  );
};
