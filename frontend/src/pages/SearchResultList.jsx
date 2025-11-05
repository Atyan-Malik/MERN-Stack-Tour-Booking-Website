import React, { useState } from "react";
import CommonSection from "../shared/CommonSection/CommonSection";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import "../styles/Tour.css"

const SearchResultList = ({ title }) => {
  const location = useLocation();

  const [data] = useState(location.state);
  return (
    <>
      <div>
        <CommonSection title={"Tour Search Result"} />

        <div className="tourgrid">
          {data.length === 0 ? (
            <h4>No Tour Found</h4>
          ) : (
            data?.map((tour) => (
              <div className=" tourdata" key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResultList;
