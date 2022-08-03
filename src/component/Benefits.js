import React from "react";
import { FcLike } from 'react-icons/fc'
import "./Benefits.scss"

const Benefits = () => {
  const explain =
    "The research show that people with animals usually are more healthy and happy of they do not have, also we know the wonderful that is come back to home of a busy day and hear the satisfaction purr of a lovely cat. Is for that, we do not have any doubts that the cats are good pets.";

  const benefits = [
    "Has been checked that have a cat reduce the stress and are big companion for those who feel sad or depressed.",
    "Normally, the cat owners have the blood pressure lower than others without cats.",
    "Your immune system will be stronger and it will allow you to recover faster of sickness.",
    "For general, the kids that are growing with cats get sick less.",
    "They have less cares compare from others pets",
    "They help you to recover faster from an emotional trauma like the pass away of a loved.",
  ];

  return (
    <div className="benefits">
      <div>
        <span>Benefits</span>
      </div>
      <div>
        <img
          src="https://cdn2.thecatapi.com/images/VXppGG5rK.jpg"
          alt="breed-benefit"
        ></img>
      </div>
      <div>
        <p>{explain}</p>
      </div>
      <div>
        {
            benefits.map(benefit =>{
                return <div>
                    <div>
                    <FcLike />
                    </div>
                    <span>{benefit}</span>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Benefits;
