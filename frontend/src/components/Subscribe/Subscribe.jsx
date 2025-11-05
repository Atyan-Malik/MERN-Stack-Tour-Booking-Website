import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        {/* LEFT SIDE */}
        <div className="subscribe-text">
          <h4 className="subscribe-sub">Subscribe Now</h4>
          <h1 className="subscribe-main">
            Get The Latest Travel Updates & Exclusive Offers
          </h1>

          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <p className="subscribe-desc">
            Join our community of travel lovers and be the first to know about
            exciting destinations, travel tips, and exclusive discounts.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="subscribe-right">
          <img
            src="/tour-images/male-tourist.png"
            alt="Subscribe"
            className="subscribe-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
