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
      <p>{movie.times.join(" | ")}</p>
    </div>
  );
}

export default MovieCard;
