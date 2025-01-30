import styles from "../styles/MovieCard.module.css";

function MovieCard() {
  return (
    <div className={styles.movieCard}>
      <img src={"/images/${movie.title}.jpg"} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.times.join(" | ")}</p>
    </div>
  );
}

export default MovieCard;
