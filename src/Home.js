import React from "react";
import Button from "./Button";
import CurrentPromo from "./CurrentPromo";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header headerName="home" />
      <CurrentPromo />
      <section id="home">
        <div className="home-site">
          <div className="container">
            <div className="home-cards home-caffe">
              <h1>KAWA</h1>
              <p>100% świeżopalonej Arabiki z Etiopii</p>
            </div>
          </div>
          <div className="container">
            <div className="home-cards home-barists">
              <h1>BARIŚCI</h1>
              <p>Poznaj pasjonatów kawy</p>
            </div>
          </div>
          <div className="container">
            <div className="home-cards home-atmosphere">
              <h1>ATMOSFERA</h1>
              <p>Odwiedź miejsce spotkań fascynatów kawy</p>
            </div>
          </div>
        </div>
      </section>
      <section id="coffee-container">
        <div className="our-coffee">
          <h1>
            Zabierz do domu naszą kawę i ciesz się nią kiedy tylko chcesz!
          </h1>
          <Button btnContent="Sprawdź nasze kawy" />
        </div>
      </section>
    </>
  );
}

export default Home;
