import React, { useState } from "react";
import Slider from "react-slick";
import { upcomingMovies } from "../data/upcomingMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/UpcomingMovies.module.css";
import UpcomingMovieCarousel from "../components/UpcomingMovieCarousel";
import UpcomingMovieCard from "../components/UpcomingMovieCard";

export const UpcomingMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  return (
    <div className={styles.upcomingMoviesContainer}>
      <h1>Kommende filmer</h1>

      <UpcomingMovieCarousel/>

      <div className={styles.movieGrid}>
        {upcomingMovies.map((movie, index) => (
          <UpcomingMovieCard 
          key={index} 
          movie={movie} 
          isCarousel={false} 
          onClick={() => setSelectedMovie(movie)}/>
        ))}
      </div>

      {selectedMovie && (
        <div className={styles.movieDetails}>
          <h2>{selectedMovie.title}</h2>
          <p>Utgivelsesdato: {selectedMovie.releaseDate}</p>
          <button onClick={() => setSelectedMovie(null)}>Lukk</button>
        </div>
      )}
    </div>
  );
};
