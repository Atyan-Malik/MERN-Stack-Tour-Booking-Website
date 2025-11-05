import React, { useEffectEvent } from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/Tour-Details.css";
import tours from "../data/tours";
import { calculateAvgRating } from "../utils/calculateAvgRating";
import { data, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import avatar from "/tour-images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";

const reviews = [{ rating: 5 }, { rating: 4 }, { rating: 3 }];

const { avgRating, totalRating } = calculateAvgRating(reviews);

const TourDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [tourRating, setTourRating] = useState(null);
  const reviewMsgRef = useRef("");
  const option = { day: "numeric", month: "long", year: "numeric" };
  const {
    data: fetchedTour,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/${id}`);

  const tour = fetchedTour?.data;




  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!tour) return <h2 className="text-center">Tour not found</h2>;
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } =
    tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${tourRating} Ratings ${reviewText} `);
  };



  return (
    <>
      <div className="tour-content">
        <div className="right-sec">
          <img src={photo} alt="" />

          <div className="tour-title">
            <h2>{title}</h2>
          </div>

          <div className="tour-rating">
            <span>
              <i className="ri-star-line"></i>
              {calculateAvgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "not rated"
              ) : (
                <span>({reviews?.length})</span>
              )}{" "}
            </span>
            <i className="ri-pin-distance-line"></i> <span>{distance}/Km</span>
          </div>

          <div className="tour-price-city">
            <i className="ri-map-pin-2-line"></i> <span>{city}</span>
            <span>${price}/per person</span>
            <span>{maxGroupSize}</span>
          </div>

          <div className="tour-desc">
            <h2>Description</h2>
            <p>
              this is our premium Tours providind you with best experinecs{" "}
              <br />
              inshallah contact now for amazing experience!
            </p>
          </div>
        </div>

        <div className="left-sec">
          <Booking tour={tour} avgRating={avgRating} />
        </div>
      </div>

      <div className="rev-container">
        <h2>Reviews ({reviews?.length} reviews)</h2>

        <span onClick={() => setTourRating(1)}>
          <i className="ri-star-line"></i>1
        </span>
        <span onClick={() => setTourRating(2)}>
          <i className="ri-star-line"></i>2
        </span>
        <span onClick={() => setTourRating(3)}>
          <i className="ri-star-line"></i> 3
        </span>
        <span onClick={() => setTourRating(4)}>
          <i className="ri-star-line"></i> 4
        </span>
        <span onClick={() => setTourRating(5)}>
          <i className="ri-star-line"></i>5
        </span>

        <form onSubmit={handleSubmit} className="review-field">
          <input
            ref={reviewMsgRef}
            type="text"
            placeholder="Share your Thought"
            required
          />
          <button type="submit">Submit</button>
        </form>

        {reviews?.map((review, index) => (
          <div key={index} className="review-section">
            <img src={avatar} alt="" />

            <div className="review-detail">
              <h2>mirza baig</h2>5<i className="ri-star-line"></i>
              <p>{new Date().toLocaleDateString("en-US", option)}</p>
              <h5>Amazing Tour</h5>
            </div>
          </div>
        ))}
      </div>

      <br />
    </>
  );
};

export default TourDetails;
