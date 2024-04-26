import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Indulge your cravings with our delightful array of culinary
        masterpieces. From savory delights to heavenly desserts, each dish is a
        celebration of flavor and freshness. Explore our menu and treat yourself
        to a symphony of taste sensations
      </p>

      {/* aba map method lagayerw items render garni, uta assets.js bata taanera */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
