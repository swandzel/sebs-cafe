import React from "react";
import "./Css/Navbar.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo"></div>
      <div className="nav-links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/onas">
            <li>O Nas</li>
          </Link>

          <li>Nasze Kawy</li>
          <li>Nasze Ciasta</li>
          <li>Zarezerwuj stolik</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
