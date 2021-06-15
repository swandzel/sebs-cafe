import React from "react";
import Button from "./Button";
import CurrentPromo from "./CurrentPromo";

function Home() {
  return (
    <>
      <CurrentPromo />
      <section id="home">
        <div className="home-site">
          <div className="home-cards home-caffe">
            <h1>KAWA</h1>
            <p>100% świeżopalonej Arabiki z Etiopii</p>
          </div>
          <div className="home-cards home-barists">
            <h1>BARIŚCI</h1>
            <p>Poznaj pasjonatów kawy stojących za naszym barem</p>
          </div>
          <div className="home-cards home-atmosphere">
            <h1>ATMOSFERA</h1>
            <p>Odwiedź miejsce spotkań fascynatów kawy</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
