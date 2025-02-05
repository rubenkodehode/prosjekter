import React from "react";
import Slider from "react-slick";
import { upcomingMovies } from "../data/upcomingMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/UpcomingMovies.module.css";
import UpcomingMovieCarousel from "../components/UpcomingMovieCarousel";

export const UpcomingMovies = () => {
  return (
    <div className={styles.container}>
      <h2>Kommende Filmer</h2>
      <UpcomingMovieCarousel />
    </div>
  );
};
