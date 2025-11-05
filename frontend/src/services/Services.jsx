import React from "react";
import weatherImg from "/tour-images/weather.png";
import guidingImg from "/tour-images/weather.png";
import costomizationImg from "/tour-images/guide.png";
import "./Services.css";

const serviceData = [
  {
    imgURL: weatherImg,
    title: "Calculation weather",
    dec: "enjoy every kind of weather with us",
  },
  {
    imgURL: guidingImg,
    title: "Best Weather for Tour",
    dec: "enjoy the best wearther with us",
  },
  {
    imgURL: costomizationImg,
    title: "Costomization",
    dec: "lorem  llkl nknk knknknj kjknj tom",
  },
];

const Services = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-left">
          <h5 className="section__subtitle ser-head">What we serve</h5>
          <h1 className="service-heading">
            We offers best <br />
            services here!
          </h1>
        </div>

        <div className="service-right grid grid-cols-3 gap-2">
          {serviceData.map((item, index) => (
            <div className="service-data" key={index}>
              <img src={item.imgURL} alt="" />
              <h1>{item.title}</h1>
              <p> {item.dec}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
