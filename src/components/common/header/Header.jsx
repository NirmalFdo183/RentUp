import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data.js";
import "../header/Header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false); // state for toggle menu

  return (
    <header>
      <div className="container flex">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        {/* Navigation */}
        <div className={`nav ${showNav ? "active" : ""}`}>
          <ul className="flex">
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="button flex">
          <h4>
            <span>2</span> My List
          </h4>
          <button className="btn1">
            <i className="fa fa-sign-out"></i> Sign in
          </button>
        </div>

        {/* Toggle button for mobile */}
        <div className="toggle">
          <button className = "x" onClick={() => setShowNav(!showNav)}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
