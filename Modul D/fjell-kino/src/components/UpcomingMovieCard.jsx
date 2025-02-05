import React from "react";
import styles from "../styles/UpcomingMovieCard.module.css";

function UpcomingMovieCard({ movie }) {
  return (
    <div className={styles.movieCard}>
      <img src={movie.image} alt={movie.title} className={styles.poster} />
      <h3>{movie.title}</h3>
      <p>Utgivelsesdato: {movie.releaseDate}</p>
    </div>
  );
}

export default UpcomingMovieCard;
