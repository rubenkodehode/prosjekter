import { FaClock, FaStar, FaDoorOpen } from "react-icons/fa";
import styles from "../styles/MovieCard.module.css";

function MovieCard({ movie, isCarousel, onClick }) {
  return (
    <div
      className={`${styles.movieCard} ${
        isCarousel ? styles.carouselMovie : styles.gridMovie
      }`}
      onClick={onClick}>
      <img className={styles.poster} src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <div className={styles.movieInfo}>
        <span className={styles.hallBadge}>
          <FaDoorOpen className={styles.icon} /> Sal {movie.hall}
        </span>
        <span className={styles.ratingBadge}>
          <FaStar className={styles.icon} /> {movie.rating}
        </span>
      </div>

      {/* Filmtidene som badges */}
      <div className={styles.timeContainer}>
        {movie.times.map((time, index) => (
          <span key={index} className={styles.timeBadge}>
            <FaClock className={styles.icon} /> {time}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
