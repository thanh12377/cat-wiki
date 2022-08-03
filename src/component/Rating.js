
import React from "react";
import "./Rating.scss";


const Rating = ({ rate }) => {
  const rateArr = ["rate", "rate", "rate", "rate", "rate"];
  for (let i = 0; i < rate; i++) {
    rateArr[i] = "rate --active";
  }
//   console.log(rateArr) 
  return (
    <div className="rating">
      {rateArr.map((rating) => {
        return <div className={`rating-${rating}`}>

        </div>;
      })}
    </div>
  );
};

export default Rating;
