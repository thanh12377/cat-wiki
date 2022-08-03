import React, { useEffect } from "react";
import { getParamsBreed } from "../apis/getApi";
import { useState } from "react";
import "./TopCat.scss";

const TopCat = () => {
  const [getBreed, setGetBreed] = useState([]);

  useEffect(() => {
    const params = "limit=10&page=0";
    getParamsBreed(params).then((res) => setGetBreed(res.data));
  }, []);

  return (
    <div className="top-container">
      <div className="top-container-header">
        <span>Top 10 most searched breeds </span>
      </div>
      <div className="top-container-breeds">
        {getBreed.map((breed) => {
          return (
            <div>
              <div>
                <img src={breed.image.url} alt="breed-cat-top-10"></img>
              </div>
              <div>
                <div>
                  <span>{breed.name}</span>
                </div>
                <div>
                  <p>{breed.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCat;
