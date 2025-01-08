import React from "react";
import "./Section.css";

const Section = ({ content, imagePath }) => {
  return (
    <div
      className="section-container"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="section-overlay">
        <h2 className="section-text">{content}</h2>
      </div>
    </div>
  );
};

export default Section;
