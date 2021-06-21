import React, { useState } from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { id: 1, to: "/", name: "Home" },
    { id: 2, to: "/onas", name: "O Nas" },
    { id: 3, to: "/naszemenu", name: "Nasze Menu" },
    { id: 4, to: "/zarezerwujstolik", name: "Zarezerwuj Stolik" },
    { id: 5, to: "/kontakt", name: "Kontakt" },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const styleLink = {
    margin: "0rem 1rem",
  };

  return (
    <nav>
      <div className="logo"></div>
      <ul className={click ? "active" : ""}>
        {links.map((link) => (
          <Link to={link.to} key={link.id} style={styleLink}>
            <li onClick={closeMenu}>{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className="burger" onClick={handleClick}>
        <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navbar;
