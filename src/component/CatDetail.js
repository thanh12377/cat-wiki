import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllBreed, getBreedById } from "../apis/getApi";
import "./CatDetail.scss";
import Rating from "./Rating";
import Carousels from "./UI/Carousels";

const CatDetail = () => {
  const [breed, setBreed] = useState([]);
  const [breedImg, setBreedImg] = useState([]);
  let { id } = useParams();

  const fetchCatDetail = async () => {
    await getAllBreed().then((res) => {
      res.data = res.data.filter((item) => item.id === id);
      setBreed(res.data);
    });
  };

  // console.log(id);
  useEffect(() => {
    fetchCatDetail();
  }, []);

  useEffect(() => {
    getBreedById(id).then((res) => {
      setBreedImg(res.data);
    });
  }, []);
  //   console.log(breed[0]);
  // console.log(breedImg);
  return (
    <div className="cat">
      <div className="cat-top">
        <div className="cat-top-img">
          <div></div>
          <div>
            <img src={breed[0]?.image?.url} alt="breed"></img>
          </div>
        </div>
        <div className="cat-top-details">
          <div className="cat-top-details-name">
            <span>{breed[0]?.name}</span>
          </div>
          <div className="cat-top-details-des">
            <p>{breed[0]?.description}</p>
          </div>
          <div className="cat-top-details-temp">
            <span className="cat-details-span">Temperament: </span>
            <span className="cat-details-span-desc">
              {breed[0]?.temperament}
            </span>
          </div>
          <div className="cat-top-details-origin">
            <span className="cat-details-span">Origin: </span>
            <span className="cat-details-span-desc"> {breed[0]?.origin} </span>
          </div>
          <div className="cat-top-details-lifespan">
            <span className="cat-details-span">Life Span: </span>
            <span className="cat-details-span-desc">{breed[0]?.life_span}</span>
          </div>
          <div className="cat-top-details-adapt">
            <span className="cat-details-span">Adaptability: </span>
            <Rating rate={breed[0]?.adaptability}></Rating>
          </div>
          <div className="cat-top-details-affect">
            <span className="cat-details-span">Affection level: </span>
            <Rating rate={breed[0]?.affection_level}></Rating>
          </div>
          <div className="cat-top-details-child">
            <span className="cat-details-span">Child Friendly: </span>
            <Rating rate={breed[0]?.child_friendly} />
          </div>
          <div className="cat-top-details-groom">
            <span className="cat-details-span">Grooming: </span>
            <Rating rate={breed[0]?.grooming} />
          </div>
          <div className="cat-top-details-intelligence">
            <span className="cat-details-span">Intelligence: </span>
            <Rating rate={breed[0]?.intelligence} />
          </div>
          <div className="cat-top-details-health">
            <span className="cat-details-span">Health issues: </span>
            <Rating rate={breed[0]?.health_issues} />
          </div>
          <div className="cat-top-details-social">
            <span className="cat-details-span">Social needs: </span>
            <Rating rate={breed[0]?.social_needs} />
          </div>
          <div className="cat-top-details-stranger">
            <span className="cat-details-span">Stranger friendly:</span>
            <Rating rate={breed[0]?.stranger_friendly} />
          </div>
        </div>
      </div>
      <div className="cat-other">
        <div>
          <span>Other Photos</span>
          <div className="cat-other-container">
            {breedImg.slice(1).map((image) => {
              return (
                <div className="cat-other-card">
                  <img src={image.url} alt="breed"></img>
                </div>
              );
            })}
          </div>
          <div className="cat-other-carousels">
            {
              <Carousels
                breed={breedImg.slice(1)}
                swipe={true}
                autoPlay={false}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetail;
