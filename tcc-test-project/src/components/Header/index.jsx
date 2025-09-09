// src\components\Header\index.jsx

import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="header-principal">
      <div className="logo">
        <span role="img" aria-label="food truck">🚚</span>
        <span className="logo-text">Cyber Food</span>
      </div>
      <nav className="nav-menu">
        <a href="#home">Início</a>
        <a href="#trucks">Food Trucks</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;