import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* LOGO & DESC */}
          <div className="footer-col">
            <div className="footer-logo">
              <h2>
                Global<span>Glimpses</span>
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              consequatur saepe officia cumque provident magni.
            </p>

            <div className="footer-socials">
              <a href="#">
                <i className="ri-youtube-line"></i>
              </a>
              <a href="#">
                <i className="ri-github-fill"></i>
              </a>
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          {/* DISCOVER */}
          <div className="footer-col">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Tour</a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li className="icon">
                <i  className="ri-map-pin-line"></i>
                <span>Multan ,Pakistan</span>
              </li>
              <li className="icon">
                <i  className="ri-mail-line"></i>

                <span>atyanmalik8@gmail.com</span>
              </li>
              <li className="icon">
                <i  className="ri-phone-line"></i>
                <span>+034567...</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025, design and developed by{" "}
            <span className="name">Atyan Malik.</span> All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
