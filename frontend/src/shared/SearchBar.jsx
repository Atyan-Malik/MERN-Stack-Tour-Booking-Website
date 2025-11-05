import React from "react";
import "./SearchBar.css";
import { useRef } from "react";
import { BASE_URL } from "../utils/config.js";
import { useNavigate } from "react-router-dom";
import SearchResultList from "../pages/SearchResultList.jsx";

const SearchBar = () => {
  const LocationRef = useRef("");
  const DistanceRef = useRef(0);
  const MaxGroupRef = useRef(0);
  const navigate = useNavigate();

  const SearchHandler = async () => {
    const location = LocationRef.current.value;
    const distance = DistanceRef.current.value;
    const maxGroupSize = MaxGroupRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      alert("All field are require");
      return
    }
   try {
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) {
      alert("Something went wrong while fetching tours");
      return;
    }

    const result = await res.json();

    if (!result.data || result.data.length === 0) {
      alert("No tours found for your search");
      return;
    }

    navigate(
      `/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  } catch (err) {
    console.error("Search failed:", err);
    alert("Search failed, please try again.");
  }
  };
  return (
    <div className="home-searchbar">
      <span>
        <i className="ri-map-pin-line"></i>
      </span>
      <div>
        <h1>Location</h1>
        <input
          type="text"
          placeholder="Where are you going"
          ref={LocationRef}
        />
      </div>
      <span>
        <i className="ri-pin-distance-fill"></i>
      </span>
      <div>
        <h1>Distance</h1>
        <input
          type="number"
          placeholder=" Distance per K/m"
          ref={DistanceRef}
        />
      </div>
      <span>
        <i className="ri-group-fill"></i>
      </span>
      <div>
        <h1>Max Peaple</h1>
        <input type="number" placeholder="0" ref={MaxGroupRef} />
      </div>
      <span onClick={SearchHandler} className="search-icon">
        <i className="ri-search-line"></i>
      </span>
    </div>
  );
};

export default SearchBar;
