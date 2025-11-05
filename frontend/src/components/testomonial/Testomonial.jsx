import React from "react";
import Slider from "react-slick";
import "./Testomonial.css";

const Testomonial = () => {
  const testimonials = [
    {
      img: "/tour-images/ava-1.jpg",
      name: "John Carter",
      role: "Travel Enthusiast",
      text: "TravelWorld made my trip so smooth and memorable! Their customer service and attentions.",
    },
    {
      img: "/tour-images/ava-2.jpg",
      name: "Sara Williams",
      role: "Adventure Blogger",
      text: "Loved every moment of my experience. From booking to the end of the trip, everything was top.",
    },
    {
      img: "/tour-images/ava-3.jpg",
      name: "Michael Lee",
      role: "Photographer",
      text: "Amazing experience! The team was friendly, professional, and made sure I captured beautiful memories.",
    },
    {
      img: "/tour-images/ava-1.jpg",
      name: "Michael Lee",
      role: "Photographer",
      text: "Amazing experience! The team was friendly, professional, and made sure I captured beautiful memories.",
    },
    {
      img: "/tour-images/ava-2.jpg",
      name: "Michael Lee",
      role: "Photographer",
      text: "Amazing experience! The team was friendly, professional, and made sure I captured beautiful memories.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h4 className="test-sub">Peaple's love</h4>
        <h1 className="test-main">What People Say About Us</h1>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{t.text}”</p>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <h3 className="testimonial-name">{t.name}</h3>
              <span className="testimonial-role">{t.role}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testomonial;
