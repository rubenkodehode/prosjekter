import Slider from "react-slick";
import { mockData } from "../data/movies";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/MovieCarousel.module.css";
import { useState } from "react";
import { useEffect } from "react";

function MovieCarousel() {
  const [windowWidth, setWindowWith] = useState(window.innerWidth)
  
  useEffect(() => {
   const handleResize = () => setWindowWith(window.innerWidth);
   window.addEventListener("resize", handleResize);
   
   return () => window.removeEventListener("resize", handleResize)
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {mockData.map((movie, index) => (
          <MovieCard key={index} movie={movie} isCarousel={true} />
        ))}
      </Slider>
    </div>
  );
}

export default MovieCarousel;
