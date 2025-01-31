import Slider from "react-slick";
import { mockData } from "../data/movies";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/MovieCarousel.module.css";

function MovieCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
