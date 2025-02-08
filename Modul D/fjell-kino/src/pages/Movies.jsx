import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockData } from "../data/movies";
import MovieCarousel from "../components/MovieCarousel";
import MovieCard from "../components/MovieCard";
import styles from "../styles/Movies.module.css";
import { FaVideo } from "react-icons/fa";

export const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  const handleBooking = (movie) => {
    navigate(`/booking?movie=${encodeURIComponent(movie.title)}`);
  };

  return (
    <div className={styles.moviesContainer}>
      <span>
        <FaVideo className={styles.icon} />
        <h1>Vises Nå på Fjell Kino:</h1>
      </span>

      <MovieCarousel />

      <div className={styles.movieGrid}>
        {mockData.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            isCarousel={false}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className={styles.movieDetails}>
          <h2>{selectedMovie.title}</h2>
          <p>Pris: ${selectedMovie.price}</p>
          <p>Vurdering: {selectedMovie.rating}</p>
          <p>Sal: {selectedMovie.hall}</p>
          <p>Tidspunkt: {selectedMovie.times.join(" | ")}</p>
          <button onClick={() => window.location.href = `/booking?movieTitle=${encodeURIComponent(selectedMovie.title)}`}>
            Bestill Billetter
          </button>
          <button onClick={() => setSelectedMovie(null)}>Lukk</button>
        </div>
      )}
    </div>
  );
};
