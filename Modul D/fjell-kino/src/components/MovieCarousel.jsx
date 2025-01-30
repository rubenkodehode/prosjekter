import Slider from "react-slick";
import { mockData } from "../data/movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {mockData.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Slider>
  );
}

export default MovieCarousel;
