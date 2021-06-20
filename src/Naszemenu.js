import React from "react";
import Header from "./Header";
import CurrentPromo from "./CurrentPromo";
import "./Css/Naszemenu.css";
import KawaImg from "./Pics/naszekawy-1.jpg";
import HerbataImg from "./Pics/naszeherbaty.jpg";
import CiastaImg from "./Pics/naszeciasta.jpg";

function Naszemenu() {
  const coffeeList = [
    { id: 1, name: "Espresso", price: "6.00" },
    { id: 2, name: "Cappuccino", price: "7.00" },
    { id: 3, name: "Flat white", price: "9.00" },
    { id: 4, name: "Kawa biała", price: "9.00" },
    { id: 5, name: "Americano", price: "8.00" },
    { id: 6, name: "Latte macchiato", price: "10.00" },
    { id: 7, name: "Frappe", price: "13.00" },
    { id: 8, name: "Tonic Espresso", price: "12.00" },
  ];

  const teaList = [
    { id: 1, name: "Portland Breakfast", price: "8.00" },
    { id: 2, name: "Jasmine Silver Tip", price: "8.00" },
    { id: 3, name: "Peppermint leaves", price: "8.00" },
    { id: 4, name: "Bergmot", price: "8.00" },
  ];

  const cakeList = [
    { id: 1, name: "Beza Pavlova", price: "10.00" },
    { id: 2, name: "Beza Wiśniowa", price: "12.00" },
    { id: 3, name: "Sernik na zimno", price: "11.00" },
    { id: 4, name: "Tarta z Malinami", price: "10.00" },
  ];

  return (
    <>
      <Header headerName="naszemenu" about="Sprawdź nasze menu" />
      <section id="naszemenu">
        {/* SEKCJA PRODUKTÓW START */}
        <div className="sekcja-produktów">
          <h1 className="h1-main">Kawy</h1>
          <div className="menu-photo">
            <img src={KawaImg} alt="Nasze Kawy" />
          </div>
          <div className="lista-produktów">
            <div className="nazwy">
              {coffeeList.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className="ceny">
              {coffeeList.map((item) => (
                <p key={item.id}>{item.price}</p>
              ))}
            </div>
          </div>
        </div>
        {/* SEKCJA PRODUKTÓW END */}
        <div className="dots">
          <i class="fas fa-coffee"></i>
          <i class="fas fa-coffee"></i>
          <i class="fas fa-coffee"></i>
        </div>
        {/* SEKCJA PRODUKTÓW START */}
        <div className="sekcja-produktów">
          <h1 className="h1-main">Herbaty</h1>
          <div className="menu-photo">
            <img src={HerbataImg} alt="Nasze Herbaty" />
          </div>
          <div className="lista-produktów">
            <div className="nazwy">
              {teaList.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className="ceny">
              {teaList.map((item) => (
                <p key={item.id}>{item.price}</p>
              ))}
            </div>
          </div>
        </div>
        {/* SEKCJA PRODUKTÓW END */}
        <div className="dots">
          <i class="fas fa-coffee"></i>
          <i class="fas fa-coffee"></i>
          <i class="fas fa-coffee"></i>
        </div>
        {/* SEKCJA PRODUKTÓW START */}
        <div className="sekcja-produktów">
          <h1 className="h1-main">Ciasta</h1>
          <div className="menu-photo">
            <img src={CiastaImg} alt="Nasze Ciasta" />
          </div>
          <div className="lista-produktów">
            <div className="nazwy">
              {cakeList.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className="ceny">
              {cakeList.map((item) => (
                <p key={item.id}>{item.price}</p>
              ))}
            </div>
          </div>
        </div>
        {/* SEKCJA PRODUKTÓW END */}
        <div className="dots">
          <i class="fas fa-coffee"></i>
          <i class="fas fa-coffee"></i>
          <i class="fas fa-coffee"></i>
        </div>
        <CurrentPromo />
      </section>
    </>
  );
}

export default Naszemenu;
