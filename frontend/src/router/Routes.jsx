import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import TourDetails from "./../pages/TourDetails";
import Tours from "./../pages/Tours";
import ThankYou from "../pages/thankYou";
import LoginThank from "../pages/LoginThank";
import RegisterThank from "../pages/RegisterThank";
import About from "../pages/About";
import TourCard from "../shared/TourCard";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/LoginThank" element={<LoginThank />} />
        <Route path="/Registerthank" element={<RegisterThank />} />
        <Route path="/tours/search/getTourBySearch" element={<SearchResultList />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default routes;
