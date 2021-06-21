import React from "react";
import "./Css/Header.css";

function Header(props) {
  const bgStyle = {
    backgroundImage: `url(/headers/header-${props.headerName}.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="header-container" style={bgStyle}>
      <div className="layer">
        <div className="header">
          <div className="title">Seb's&nbsp;Cafe</div>
          <div className="sub-title">{props.about}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
