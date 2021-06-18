import React from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/naszemenu">
            <li>Nasze Menu</li>
          </Link>
          <Link to="/zarezerwujstolik">
            <li>Zarezerwuj stolik</li>
          </Link>

          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
