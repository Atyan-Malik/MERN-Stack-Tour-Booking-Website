import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "/tour-images/gallery-01.jpg",
    "/tour-images/gallery-02.jpg",
    "/tour-images/gallery-03.jpg",
    "/tour-images/gallery-04.jpg",
    "/tour-images/gallery-05.jpg",
    "/tour-images/gallery-06.jpg",
    "/tour-images/gallery-07.jpg",
    "/tour-images/gallery-02.jpg",
    "/tour-images/gallery-03.jpg",
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h4 className="gallery-sub">Our Gallery</h4>
        <h1 className="gallery-main">Moments From Our Amazing Trips</h1>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
