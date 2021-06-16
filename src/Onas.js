import React from "react";
import Header from "./Header";
import "./Css/Onas.css";
import CoffePlantation from "./Pics/coffee-plantation.jpg";
import InsideSebs from "./Pics/inside-sebs.jpg";

function Onas() {
  return (
    <>
      <Header headerName="onas" about="Dowiedz się o nas więcej" />
      <section id="onas">
        <h1>Poznaj naszą filozofię kawy</h1>
        <div className="onas-container">
          <div className="photos">
            <img src={CoffePlantation} alt="Plantacja kawy" />
          </div>
          <div className="about">
            <p>
              Nie można iść na skróty, gdy chce się znaleźć najlepsze ziarna
              kawy. Dlatego, nasza kawowa podróż, rozpoczęta wiele lat temu,
              trwa po dziś dzień.
            </p>
            <p>
              Wie o tym też nasz Mistrz Kawy, urodzony odkrywca i doświadczony
              specjalista. Poświęcił zawodowe życie poszukując najbardziej
              postępowych farmerów uprawiających kawę w Ameryce Łacińskiej,
              Afryce Wschodniej i Azji Południowo-Wschodniej. Tych, którzy
              naprawdę rozumieją związek pomiędzy jakością ziarna i
              środowiskiem, w którym rośnie.
            </p>
            <p>
              Wspólnie z Rainforest Alliance staramy się zjednywać dla wartości
              zrównoważonego rozwoju, na bieżąco służąc radą i pomocą. Wszystko
              po to, by nasze ziarna zawsze miały powtarzalną jakość. Wprawdzie
              budowanie takich relacji angażuje sporo czasu i energii, ale jest
              to wysiłek, który warto podejmować.
            </p>
          </div>
        </div>
        <div className="onas-container-second">
          <div className="about">
            <p>
              Nasza kawiarnia to miejsce spotkań pasjonatów kawy, którzy cenią
              sobie wysoką jakość i swobodną atmosferę.
            </p>
            <p>
              Zapraszamy codziennie na kawę, wypiekane na miejscu ciasta a także
              wyśmienite desery lodowe w okresie letnim.
            </p>
            <p>
              Do zobaczenia w Seb's Cafe, mieszczącej się przy ul. Kawowa 5 w
              Krakowie!
            </p>
            <p>
              Godziny otwarcia
              <br />
              Pon-Czw: 8 - 18 Pt-Ndz: 8 - 22
            </p>
          </div>
          <div className="photos">
            <img src={InsideSebs} alt="Wnętrza Seb's Cafe" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Onas;
