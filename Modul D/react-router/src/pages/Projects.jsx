import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mountain1 from "../assets/pictures/weisshorn.jpg";
import Mountain2 from "../assets/pictures/amadablam.jpg";
import Mountain3 from "../assets/pictures/canada.jpg";
import Mountain4 from "../assets/pictures/moena.jpg";

const mockProjects = {
  prosjekt1: {
    title: "Weisshorn",
    description: "Randa, Valais Canton, Switzerland",
    image: Mountain1,
  },
  prosjekt2: {
    title: "Ama Dablam",
    description: "Koshi Province, Nepal",
    image: Mountain2,
  },
  prosjekt3: {
    title: "Kluane National Park and Reserve",
    description: "Yukon Territory, Canada",
    image: Mountain3,
  },
  prosjekt4: {
    title: "Moena",
    description: "Trentino-Alto Adige, Italy",
    image: Mountain4,
  },
};

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    centerPadding: "20px", // Spacing between cards
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Slider {...settings}>
        {Object.values(mockProjects).map((project, index) => (
          <div
            key={index}
            style={{
              padding: "0 10px", // Space between slides
            }}>
            <div
              style={{
                background: " rgb(76, 57, 57)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                padding: "10px",
                width: "95%",
                maxWidth: "500px",
                margin: "0 auto",
              }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ textAlign: "center", margin: "8px 0" }}>
                {project.title}
              </h3>
              <p style={{ textAlign: "center" }}>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
