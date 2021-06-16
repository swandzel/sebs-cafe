import React from "react";

function Header(props) {
  const bgStyle = {
    // backgroundColor: "#fff",
    // backgroundImage: `url(http://localhost:3000/header1.jpg)`,
    backgroundImage: `url(/headers/header-${props.headerName}.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="home" style={bgStyle}>
      <div className="layer">
        <div className="header">
          <div className="title">Seb's Cafe</div>
          <div className="sub-title">Najlepsza kawa w mieście</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
