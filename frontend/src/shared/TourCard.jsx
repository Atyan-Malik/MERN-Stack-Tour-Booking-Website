import React from "react";
import "./TourCard.css";
import tours from "../data/tours";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  const {
    id,
    title,
    city,
    distance,
    price,
    reviews = [],
    avgRating,
    photo,
    featured,
  } = tour;

  return (
    <div className="tour-container">
      <div className="grid-card">
        <div className="tour-image">
          <img src={photo} alt={title} loading="lazy" />
          {featured && <span className="feature">Featured</span>}
        </div>

        <div className="location">
          <span>
            <i className="ri-map-pin-fill"></i> {city}
          </span>
          <span>
            <i className="ri-star-line"></i> {avgRating || 0} ({reviews.length})
          </span>
        </div>

        <h2>{title}</h2>

        <div className="last-btn-line">
          <span>
            <strong>${price}</strong> / per person
          </span>

          <Link to={`/tours/${tour._id}`}>
            <button className="tour-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
