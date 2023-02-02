import React from "react";
import logo from "@assets/img/logo.jpeg";

const Header = () => {
  const navItems = [
    { id: 1, name: "Home", link: "#hero-area" },
    { id: 2, name: "About Us", link: "#about-us" },
    { id: 3, name: "Blog", link: "#blog" },
    { id: 4, name: "Menu", link: "#price" },
    { id: 5, name: "News", link: "#subscribe" },
    { id: 6, name: "Contacts", link: "#contact-us" },
  ];
  return (
    <>
      <header className="header" id="header">
        <div className="header__top" style={{backgroundColor:'#F3BC77'}}>
          <div className="header__top-container">
            <nav className="header__top-lang header__top-lang--ca">
              <ul>
                <li>
                  <p>
                    <a href="#" className="item-ca">
                      CAT
                    </a>
                  </p>
                </li>
              </ul>
            </nav>
            {/* <div className="header__account">
              <p>
                <a
                  href="#"
                  title="Login / Register"
                >
                  EL MEU COMPTE
                </a>
              </p>
            </div> */}
          </div>
        </div>
        <div className="header__container">
          <figure className="header__logo">
            <img src={logo} alt="logo"  style={{borderRadius:'10%'}}/>
          </figure> 
          <nav
            className="header__menu header__menu--is-page"
            id="js-header__menu"
          >
            <ul className="items">
              <div className="menu">
                <ul>
                  {/* <li className="page_item page-item-6">
                    <a
                      href="https://mooma.myrestoo.net/ca/reservar"
                      rel="noopener"
                      target="_blank"
                      aria-label="RESERVES (opens in a new tab)"
                    >
                      Reserves
                    </a>
                  </li> */}
                  {/* <li className="page_item page-item-472">
                    <a
                      href="https://mooma.myrestoo.net/ca/tienda"
                      rel="noopener"
                      target="_blank"
                      aria-label="REGALA (opens in a new tab)"
                    >
                      Regala
                    </a>
                  </li>
                  <li className="page_item page-item-8">
                    <a href="https://mooma.cat/mooma/">Mooma</a>
                  </li> */}
                  <li className="page_item page-item-10 current_page_item">
                    <a
                      href="#"
                      aria-current="page"
                    >
                      Sidreria / Restaurant
                    </a>
                  </li>
                  <li className="page_item page-item-13">
                    <a href="#Sobre">Sobre nosaltres</a>
                  </li>
                  <li className="page_item page-item-17">
                    <a href="#Menu">Menú</a>
                  </li>
                  <li className="page_item page-item-19">
                    <a href="#Social">Social</a>
                  </li>
                  <li className="page_item page-item-21">
                    <a href="#">Contacte</a>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
          <div className="header__btns">
            <ul>
              <li>
                <a href="#" className="btn-cor">
                  <i>
                    <svg
                      className="svg__favorit"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-.5 -1 22 22"
                    >
                      <title>Llista de desitjos</title>
                      <path d="M19.53,1.73a5.81,5.81,0,0,1,1.71,4.16,5.87,5.87,0,0,1-1.72,4.17L11,18.5a.58.58,0,0,1-.43.18.62.62,0,0,1-.42-.18L1.73,10A5.88,5.88,0,1,1,10,1.73l.59.59.58-.58a5.88,5.88,0,0,1,8.32,0ZM18.66,9.2a4.67,4.67,0,1,0-6.6-6.6l-1,1a.6.6,0,0,1-.86,0l-1-1a4.66,4.66,0,0,0-6.6,6.59l8,8Z"></path>
                    </svg>
                  </i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="btn-search"
                  id="js-btn-search"
                >
                  <i>
                    <svg
                      className="svg__lupa"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21.16 21.16"
                    >
                      <title>lupa</title>
                      <path d="M21,20.08l-5.14-5.14a9,9,0,1,0-.89.89L20.08,21a.65.65,0,0,0,.45.19A.59.59,0,0,0,21,21a.62.62,0,0,0,0-.89ZM1.26,9A7.76,7.76,0,1,1,9,16.78,7.76,7.76,0,0,1,1.26,9Zm0,0"></path>
                    </svg>
                  </i>
                </a>
              </li>

              <li>
                <a href="#" id="js-btn-cart">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21.22 22.83"
                    >
                      <title>carro</title>
                      <path
                        className="svg__carro"
                        d="M6.05,15H18.63a2.6,2.6,0,0,0,2.59-2.59V7.09h0V7h0s-16.49-2.68,0-.09h-.14L4.73,4.32V2.1a.09.09,0,0,0,0-.07V2h0V1.87H4.67L.88.05A.63.63,0,0,0,.05.38h0a.63.63,0,0,0,.33.83h0L3.46,2.51V16.39A2.59,2.59,0,0,0,5.71,19a2.53,2.53,0,0,0-.36,1.31,2.56,2.56,0,0,0,5.12,0A2.53,2.53,0,0,0,10.11,19h5.7a2.46,2.46,0,0,0-.36,1.29A2.56,2.56,0,1,0,18,17.72H6a1.34,1.34,0,0,1-1.33-1.33V14.68A2.65,2.65,0,0,0,6.05,15ZM9.2,20.27A1.29,1.29,0,1,1,7.89,19h0A1.3,1.3,0,0,1,9.2,20.27Zm10.11,0A1.29,1.29,0,1,1,18,19a1.29,1.29,0,0,1,1.31,1.27Zm-.68-6.51H6.05a1.32,1.32,0,0,1-1.33-1.31h0V5.6L20,7.69v4.75a1.33,1.33,0,0,1-1.32,1.32Z"
                      ></path>
                    </svg>
                    <span className="counter-cart" id="js-counter-cart">
                      0
                    </span>
                  </i>
                </a>
              </li>

              <li className="e-only-mobile">
                <button
                  className="header__btn-mobile"
                  id="js-header__btn-mobile"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
