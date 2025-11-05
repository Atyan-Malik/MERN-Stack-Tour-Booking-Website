import React from "react";
import { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection/CommonSection";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import tours from "../data/tours";
import "../styles/Tour.css";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import Subscribe from "../components/Subscribe/Subscribe";
import { Link } from "react-router-dom";

const Tours = () => {
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/Search/TourCount`);
   
  useEffect(() => {
    const pages = Math.ceil(pageCount / 8);
    setpageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <section>
        <CommonSection title={"All Tours"} />
      </section>
      <section>
        <SearchBar />
      </section>

      <section className="tourgrid">
        {tours?.data?.map((tour) => (
          <div className="" key={tour._id}>
            <Link to={`/tours/${tour._id}`}>
              <TourCard tour={tour} />
            </Link>
          </div>
        ))}
      </section>

      <section className="pagination d-flex justify-content-center align-item-center gap-3 ">
        {[...Array(pageCount).keys()].map((number) => (
          <span
            key={number}
            onClick={() => setpage("number")}
            className={page === number ? "page_active" : ""}
          >
            {number + 1}
          </span>
        ))}
      </section>

      <Subscribe />
    </>
  );
};

export default Tours;
