import React from "react";
import Header from "./Header";
import "./Css/Zarezerwujstolik.css";

function Zarezerwujstolik() {
  return (
    <>
      <Header headerName="zarezerwuj" about="Zarezerwuj stolik" />
      <section id="zarezerwuj">
        <h1>Chcesz zarezerwować stolik w Seb's Cafe?</h1>
        <div className="zarezerwuj-container">
          <p>Aby zarezerwować stolik zadzwoń:</p>
          <p>
            <i class="fas fa-phone-alt"></i> 500-100-999
          </p>
        </div>
      </section>
    </>
  );
}

export default Zarezerwujstolik;
