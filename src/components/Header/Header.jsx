import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>Weather Management System </h1>
      <picture>
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30f/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30f/512.gif"
          alt="🌏"
          width="32"
          height="32"
        />
      </picture>
    </header>
  );
};
