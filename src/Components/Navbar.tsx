import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './Navbar.css'; // Import custom CSS

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand">Sana Akhlaq</div>
        <ul className="navbar-menu">
          <li className="menu-link"><a href="#Hero">Home</a></li>
          <li className="menu-link"><a href="#about">About</a></li>
          <li className="menu-link"><a href="#Projects">Projects</a></li>
          <li className="menu-link"><a href="#Skills">Skills</a></li>
          <li className="menu-link"><a href="#Contact">Contact</a></li>
        </ul>
        <AiOutlineMenu className="menu-icon" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
