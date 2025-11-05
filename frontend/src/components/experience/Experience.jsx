import React from "react";
import CountUp from "react-countup";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-text">
          <h4 className="section__subtitle">Experience</h4>
          <h1 className="main-heading">
            With Our All Experience We will Serve You
          </h1>
          <p className="description">
            Our travel experts craft personalized journeys filled with comfort,
            adventure, and unforgettable experiences. From seamless bookings to
            expert guidance, we ensure your travels are smooth and full of joy.
          </p>

          {/* COUNTUP STATS */}
          <div className="stats">
            <div className="stat-box">
              <h2>
                <CountUp end={2500} duration={3} />+
              </h2>
              <p>Successful Trips</p>
            </div>
            <div className="stat-box">
              <h2>
                <CountUp end={1500} duration={3} />+
              </h2>
              <p>Regular Clients</p>
            </div>
            <div className="stat-box">
              <h2>
                <CountUp end={10} duration={3} />+
              </h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-image">
          <img src="./tour-images/experience.png" alt="Travel Experience" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
