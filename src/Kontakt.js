import React from "react";
import Header from "./Header";
import "./Css/Kontakt.css";
import KontaktImg from "./Pics/kontakt.jpg";

function Kontakt() {
  return (
    <>
      <Header headerName="kontakt" about="Kontakt" />
      <section id="kontakt">
        <h1>Skontaktuj się z nami?</h1>
        <div className="kontakt-container">
          <div className="kontakt-info">
            <div className="kontakt-detail">
              <p>Seb's Cafe</p>
              <p>ul. Kawowa 5, Kraków</p>
            </div>
            <div className="kontakt-detail">
              <p>Godziny otwarcia</p>
              <p>Pon-Czw: 8 - 18, Pt-Ndz: 8 - 22</p>
            </div>
            <div className="kontakt-detail">
              <p>Zadzwoń do nas</p>
              <p>500-100-999</p>
            </div>
            <div className="kontakt-detail">
              <p>Napisz do nas</p>
              <p>kontakt@sebs.cafe</p>
            </div>
          </div>
          <div className="kontakt-photo">
            <img src={KontaktImg} alt="Seb's Cafe" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Kontakt;
