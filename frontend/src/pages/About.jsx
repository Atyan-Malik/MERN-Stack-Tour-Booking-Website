import React from "react";
import "../styles/About.css";
import Subscribe from "../components/Subscribe/Subscribe";

const About = () => {
  return (

    <>  
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>
          About <span>Global Glimpses</span>
        </h1>
        <p>
          Your journey begins with us — explore, experience, and enjoy the world
          like never before!
        </p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-image">
          <img src="/tour-images/gallery-04.jpg" alt="About TravelWorld" />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Global Glimpses is a modern travel agency built for explorers,
            wanderers, and dreamers. From mountain treks to beach holidays, we
            connect you with the best destinations and experiences around the
            globe.
          </p>
          <p>
            Our mission is to make travel simple, inspiring, and memorable.
            Whether you’re planning your first trip or your hundredth adventure,
            we’re here to guide you every step of the way.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>120+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat">
              <h3>5K+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat">
              <h3>4.9★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        
        <Subscribe/>
</>
  );
};

export default About;
