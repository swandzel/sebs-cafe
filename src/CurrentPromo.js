import React from "react";
import Button from "./Button";
import "./Css/CurrentPromo.css";

function CurrentPromo() {
  return (
    <section id="current-promo">
      <div className="promo-container">
        <div className="promo">
          <div className="promo-info">
            <h2>Do każdego croissant'a średnia kawa za 1zł!</h2>
            <h3>Codziennie od 8 do 12.</h3>
            <Button btnContent="Dowiedz się więcej" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentPromo;
