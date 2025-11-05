import React from "react";
import { useState } from "react";
import "./Booking.css";
import { BASE_URL } from "../../utils/config";
import { Navigate, useNavigate } from "react-router-dom";
import thankYou from "../../pages/thankYou";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Booking = ({ tour, avgRating }) => {
  const { user } = useContext(AuthContext);

  const [credential, setcredential] = useState({
    userId: "01",
    userEmail: "example@gmailcom",
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });

  const { price, reviews } = tour;
  const serviceFee = 10;
  const totalPrice =
    Number(price) * Number(credential.guestSize) + Number(serviceFee);

  const handleChange = (e) => {
    setcredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first to book a tour!");
      return navigate("/login");
    }

    try {
      const res = await fetch(`${BASE_URL}/booking/bookTour`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          ...credential,
          userId: user._id,
          tourId: tour._id,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Booking failed");
      }

      alert(" Tour booked successfully!");
      navigate("/thankyou");
    } catch (err) {
      console.error(" Booking error:", err.message);
      alert("Booking failed: " + err.message);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-head">
        <h3>${price}/per/person</h3>
        <span>
          <i className="ri-star-line"></i>
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>

      <div className="booking-form">
        <h1>Information</h1>
        <form onSubmit={handleClick}>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="userEmail"
            required
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            required
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Phone"
            id="phone"
            required
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="guest"
            id="guestSize"
            required
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder=" "
            id="bookAt"
            required
            onChange={handleChange}
          />{" "}
          <br />
          <div className="price-per-per">
            <h5>
              ${price} <i className="ri-close-line"></i> per person
              <span> ${price}</span>
            </h5>
          </div>
          <div className="service-cha">
            <h5>Service Fee</h5>
            <span>${serviceFee}</span>
          </div>
          <div className="total-cha">
            <h5>Total</h5>
            <span>${totalPrice}</span>
          </div>
          <button type="button" onClick={handleClick} className="primary__btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
