import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Carousels.scss"


const Carousels = ({ breed }) => {
  return (
    <div className="carousels">
      <Carousel className="carousels-container">
        {breed.map((item) => {
          return <Paper>
            <img src={item.url} alt ="breed-img" className="cat-img"></img>
          </Paper>;
        })}
      </Carousel>
    </div>
  );
};

export default Carousels;
