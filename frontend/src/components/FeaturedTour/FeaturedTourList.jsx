import React from "react";
import tours from "../../data/tours";
import TourCard from "../../shared/TourCard";
import "./FeaturedTourList.css";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";
import Subtitle from "../../shared/Subtitle";
import { Link } from "react-router-dom";

const FeaturedTourList = ({ tour }) => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/Search/FeatureTour`);

  const tours = featuredTours?.data || [];
  if (featuredTours?.data?.length) {
  }

  return (
    <>
      <div className="feature-container">
        <div className="feature-content">
          <div className="section__subtitle">
            <Subtitle subtitle={"explore"} />
          </div>
          <h1 className="feature-title ">Our Feature product</h1>
          {loading && <h4>Loading......</h4>}
          {error && <h4>{error}</h4>}
          {!loading && !error && (
            <div className="tour-grid">
              {tours.map((tour) => (
                <div className="tour-data" key={tour._id}>
                  <Link to={`/tours/${tour._id}`}>
                    <TourCard tour={tour} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedTourList;
