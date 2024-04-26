import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  // focus wala li element maa underline lyauna lai
  // menu state maa jun value xa, tei li maa active vanni class add garni
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* <img src={assets.logo} alt="" className="logo" /> */}
			<span className="logo">khaniGoals?</span>

      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
					{/* yeta basket maa kei samaan halyo vani dot visible, natra not visible */}
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
