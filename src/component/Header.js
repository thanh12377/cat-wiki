import React from "react";
import { Fragment } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ handleLogoClick }) => {
  return (
    <>
      <div className="main-header">
        <Link to="/">
          <img
            className="logo"
            src="https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatwikilogo.92dea8ab.svg&w=128&q=75"
            alt=""
            onClick={() => handleLogoClick()}
          ></img>
        </Link>
      </div>
    </>
  );
};

export default Header;
