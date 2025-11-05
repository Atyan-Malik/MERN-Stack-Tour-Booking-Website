import React from "react";
import "../styles/Home.css";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import Services from "../services/Services";
import FeaturedTourList from "../components/FeaturedTour/FeaturedTourList";
import Experience from "../components/experience/Experience";
import Gallery from "../components/Gallery.jsx/Gallery";
import Subscribe from "../components/Subscribe/Subscribe";
import Testomonial from "../components/testomonial/Testomonial";

const Home = ({ subtitle, tour }) => {
  return (
    <>
      <div className="home-container">
        {/* hero left side */}
        <div className="hero-left">
          <div className="heading-left">
            <div className="section__subtitle">
              <Subtitle subtitle="Know before you Go" />
            </div>
            <img className="w-img" src="/tour-images/world.png" alt="" />
          </div>
          <h1 className="heading-one">
            Travelling Opens the Doors <br />
            For Making <strong>Memories</strong>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Vel
            minus dicta maxime eum laudantium illum <br /> laborum ratione
            beatae ipsum nemo. <br />
            fflrmklrgkklgntkgntklmlm
          </p>
        </div>

        {/* hero right side */}

        <div className="hero-right">
          <div className="img-container">
            <img src="/tour-images/hero-img01.jpg" alt="" />
            <video src="/tour-images/hero-video.mp4" controls></video>
            <img src="/tour-images/hero-img02.jpg" alt="" />
          </div>
        </div>
      </div>

      <SearchBar />

      <div className="services">
        <Services />
      </div>

      <div className="tours ">
        <FeaturedTourList />
      </div>
      <div className="experience-section">
        <Experience />
      </div>

      <div className="gallery-section">
        <Gallery />
      </div>

      <div className="subscribe-section">
        <Subscribe />
      </div>

      <div className="testomonial-section">
        <Testomonial />
      </div>
    </>
  );
};

export default Home;
