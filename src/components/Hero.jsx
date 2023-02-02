import React from "react";
import Fancybox from "./FancyBox";
import lavega from "@assets/img/lavega.jpg";
import food1 from "@assets/img/food1.jpg";

const Hero = () => {
  return (
    <section className="c-page" id="Sobre">
      <header className="c-page__header">
        <h1 className="c-page__header-title">Masia / Restaurant</h1>
        <p>Gaudeix d’un bon àpat</p>

        <picture className="c-page__banner-top">
          <source media="(min-width: 2000px)" srcSet={lavega} />

          <img src={lavega} alt="Sidreria / Restaurant" />
        </picture>
      </header>

      <div className="c-page__container">
        <div className="c-page__container-row c-page__container-row--90">
          <div className="c-page__grid-sm-50">
            <h1 style={{ color: "#D58E34" }}>
              Descobreix masia la vega, un espai únic en un entorn immillorable.
            </h1>
            <p>
              <b />
              masia la vega
              <b />
              &nbsp;ubicada en Sant Sadurní d’Anoia, Catalunya, pretende ser un
              modelo de vida sostenible en armonía con la naturaleza,
              aprovechando todos los recursos que nos brinda.
              <br />
              Ofrece un entorno natural agradable y acogedor, productos de
              temporada, km0 y de elaboración propia.
              <br />
              També compta amb opcions aptes per vegetarians i vegans, així com
              persones celíaques o intolerants. Però no només és un restaurant,
              sinó que també hi pots anar a fer una sidra tranquil·lament o, en
              temporada d’estiu, d’un còctel al seu Jardí.
            </p>
            <p>
              Funciona a base de energías renovables como la eólica y la solar,
              utiliza un filtrado natural para aprovechar el agua de lluvia para
              regar los jardines y cuenta con un huerto ecológico. 
            </p>
          </div>

          <div className="c-page__grid-sm-50">
            <div className="c-page__width-small c-page__width-small--sepa-figures">
              <figure>
                <img
                  src={food1}
                  alt="Mooma entrada restaurant"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <section className="c-icones-serveis" id="js-c-icones-serveis">
        <ol id="Menu">
          <li>
            <a
              data-fancybox="gallery"
              href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-164.jpg"
              style={{borderColor: "#d58e34"}}
            >
              <i>
                <svg
                  className="svg_espais"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 196.67 196.67"
                >
                  <defs>
                    <style>
                      {
                        "\r\n      .svg_espais .a {\r\n        fill: none;\r\n        stroke: #d58e34;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 2px;\r\n      }\r\n    "
                      }
                    </style>
                  </defs>
                  <title>{"espai"}</title>
                  <circle className="a" cx={98.33} cy={98.33} r={97.33} />
                  <path d="M140.07,101.3V86.5h-1.78a20.4,20.4,0,0,0-14,5.57H122V90.68h1.39a1.39,1.39,0,1,0,0-2.78H109.46a1.39,1.39,0,0,0,0,2.78h1.39v1.39h-6.52a12.71,12.71,0,0,0,1-5.57,9.18,9.18,0,0,0-1-4.83c-.16-.35-.35-.74-.54-1.24l-.36-.88H99.73V76l2.37-2.37a1.38,1.38,0,0,0,0-2,1.4,1.4,0,0,0-2,0l-.4.41v-2.4a5.57,5.57,0,0,0,4.17-5.37V61.46H99.73V58.68h-7v7A5.57,5.57,0,0,0,96.94,71V74.8l-.4-.41a1.4,1.4,0,0,0-2,0,1.38,1.38,0,0,0,0,2l2.37,2.37v.82H93.26l-.36.88c-.19.5-.38.89-.54,1.24a9.18,9.18,0,0,0-1,4.83,12.71,12.71,0,0,0,1,5.57H85.81V90.68h1.4a1.39,1.39,0,0,0,0-2.78H73.3a1.39,1.39,0,1,0,0,2.78h1.39v1.39H72.37a20.42,20.42,0,0,0-14-5.57H56.6v14.8a7.45,7.45,0,0,0,6.59,7.37L58,129.29a1.39,1.39,0,0,0,1,1.69,1.86,1.86,0,0,0,.33,0A1.39,1.39,0,0,0,60.73,130l5-19.92L72,130a1.38,1.38,0,0,0,1.33,1,1.22,1.22,0,0,0,.41-.07,1.37,1.37,0,0,0,.91-1.74l-6.39-20.45H78.86V107a20.4,20.4,0,0,0-1.1-6.57H90V106h4.17v11.13A11.14,11.14,0,0,1,83,128.24H77.47a1.39,1.39,0,1,0,0,2.78H119.2a1.39,1.39,0,1,0,0-2.78h-5.56a11.14,11.14,0,0,1-11.13-11.13V106h4.17v-5.56h12.23a20.4,20.4,0,0,0-1.1,6.57v1.77h9.35L122,129.29a1.39,1.39,0,0,0,1,1.69,2,2,0,0,0,.33,0,1.39,1.39,0,0,0,1.35-1.06l5-19.92L136,130a1.38,1.38,0,0,0,1.33,1,1.22,1.22,0,0,0,.41-.07,1.37,1.37,0,0,0,.91-1.74l-6.39-20.45h.39a7.47,7.47,0,0,0,7.46-7.46ZM113.64,90.68h5.56v1.39h-5.56ZM101.12,64.25a2.77,2.77,0,0,1-1.39,2.4v-2.4Zm-5.57,1.39V61.46h1.39V68a2.75,2.75,0,0,1-1.39-2.4ZM94.16,86.5a6.66,6.66,0,0,1,.72-3.66c.07-.15.15-.33.24-.51h6.43c.09.18.17.36.24.51a6.66,6.66,0,0,1,.72,3.66c0,5.57-1.31,5.57-4.18,5.57s-4.17,0-4.17-5.57ZM77.47,90.68H83v1.39H77.47ZM64.06,106a4.69,4.69,0,0,1-4.68-4.68v-12a17.7,17.7,0,0,1,13.5,7.54,18,18,0,0,1,1.57,2.74l.15.33a17.71,17.71,0,0,1,1.45,6Zm39.84-2.78H99.73v13.91a13.9,13.9,0,0,0,5.57,11.13H91.37a13.9,13.9,0,0,0,5.57-11.13V103.2H92.77v-2.78H103.9Zm16.19-5.57H76.58l0,0c-.17-.33-.35-.64-.54-1s-.28-.49-.43-.72l-.45-.67c-.09-.13-.17-.27-.26-.39H121.8c-.09.12-.17.26-.26.39l-.45.67c-.15.23-.3.47-.43.72s-.37.62-.54,1l0,0Zm2,2.3.15-.33a17.21,17.21,0,0,1,1.57-2.74,17.7,17.7,0,0,1,13.5-7.54v12a4.69,4.69,0,0,1-4.68,4.68h-12a17.49,17.49,0,0,1,1.45-6Zm0,0" />
                </svg>
              </i>
              <p>Espai</p>
            </a>
            <Fancybox options={{ infinite: false }}>
              <div id="js-gal__c-icones-serveis">
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-194.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-199.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-202.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-219.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-239.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-243.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-248.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/espais/mooma-263.jpg"
                  data-fancybox="gallery"
                ></a>

                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/Fotolia_176117996_Subscription_Monthly_XXL.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_1058.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0047.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0142.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0066.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/laresclosa-e1479920665697.png"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/massaulot-e1479921179274-1.png"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/gironafruits-e1479920700820.png"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0166.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0139.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0168.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0078.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0137.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0171.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0072.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0048.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0170.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0100.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0167.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0059.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0161.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0157.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0110.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0114.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/massaulot-e1479921179274-1.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0165.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0177.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_1478.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0112.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0328.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0160.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/DSC_6316.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/simbol.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0308.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0080.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/aiguardent.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_1467.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/PINK-ROSEE.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_1415.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/insta03.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/insta05.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_1549.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/insta04.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/insta02.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/insta01.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0141.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0314.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0151.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0135.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0224.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/gironafruits-e1479920700820.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0184.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0183.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0081.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0147.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0113.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/FUJI-1.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/laresclosa-e1479920665697.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0044.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_1471.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0201.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0089.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0138.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0131.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/IMG_0108.jpg"
                  data-fancybox="gallery"
                ></a>
                <a
                  href="https://mooma.cat/wp-content/themes/mooma/uploads/big/DSC_8617-2.jpg"
                  data-fancybox="gallery"
                ></a>
              </div>
            </Fancybox>
          </li>

          <li>
            {/* <!-- <a target="_blank" href=""> --> */}
            <a target="_blank" href="#">
              <i>
                <svg
                  className="svg__menu"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 196.67 196.67"
                >
                  <defs>
                    <style>
                      {
                        "\r\n      .svg__menu .a {\r\n        fill: none;\r\n        stroke: #d58e34;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 2px;\r\n      }\r\n    "
                      }
                    </style>
                  </defs>
                  <title>{"menu"}</title>
                  <circle className="a" cx={98.33} cy={98.33} r={97.33} />
                  <g>
                    <path d="M90.34,96a.71.71,0,0,0,0,.2v8a1.34,1.34,0,1,0,2.68,0v-8c0-.07,0-.13,0-.2a5.93,5.93,0,0,0,4-5.83,5.39,5.39,0,1,0-10.71,0A5.93,5.93,0,0,0,90.34,96Zm1.3-9.18A3.43,3.43,0,1,1,89,90.16a3.09,3.09,0,0,1,2.68-3.35Zm0,0" />
                    <path d="M109.05,84.13a1.34,1.34,0,0,0-1.34,1.34v5.36a1.34,1.34,0,0,1-1.34,1.34v-6.7a1.34,1.34,0,0,0-2.68,0v6.7a1.34,1.34,0,0,1-1.34-1.34V85.47a1.34,1.34,0,1,0-2.68,0v5.36a4,4,0,0,0,4,4v9.38a1.34,1.34,0,1,0,2.68,0V94.85a4,4,0,0,0,4-4V85.47a1.34,1.34,0,0,0-1.34-1.34Zm0,0" />
                    <path d="M87.62,81.45h21.43a1.34,1.34,0,0,0,1.34-1.34v-6.7a1.34,1.34,0,0,0-1.34-1.34H87.62a1.34,1.34,0,0,0-1.34,1.34v6.7a1.34,1.34,0,0,0,1.34,1.34ZM89,74.75h18.75v4H89Zm0,0" />
                    <path d="M87.62,115h21.43a1.34,1.34,0,0,0,0-2.68H87.62a1.34,1.34,0,0,0,0,2.68Zm0,0" />
                    <path d="M87.62,119h12a1.34,1.34,0,1,0,0-2.68h-12a1.34,1.34,0,1,0,0,2.68Zm0,0" />
                    <path d="M87.62,110.93h21.43a1.34,1.34,0,0,0,0-2.68H87.62a1.34,1.34,0,0,0,0,2.68Zm0,0" />
                    <path d="M126.47,53.31H70.2a1.34,1.34,0,0,0-1.34,1.34v80.4a1.34,1.34,0,0,0,1.34,1.34h56.27a1.34,1.34,0,0,0,1.34-1.34V54.65a1.34,1.34,0,0,0-1.34-1.34ZM89,65.37h18.75a4,4,0,0,0,4-4h8v67H76.9v-67h8a4,4,0,0,0,4,4ZM109.05,56v5.36a1.34,1.34,0,0,1-1.34,1.34H89a1.34,1.34,0,0,1-1.34-1.34V56Zm16.08,77.72H71.54V56h13.4v2.68H75.56A1.34,1.34,0,0,0,74.22,60v69.68A1.34,1.34,0,0,0,75.56,131h45.55a1.34,1.34,0,0,0,1.34-1.34V60a1.34,1.34,0,0,0-1.34-1.34h-9.38V56h13.4Zm0,0" />
                    <path d="M105,116.29h-1.34a1.34,1.34,0,1,0,0,2.68H105a1.34,1.34,0,1,0,0-2.68Zm0,0" />
                  </g>
                </svg>
              </i>
              {/* <!-- <p></p> --> */}
              <p>Menús</p>
            </a>
          </li>

          <li>
            <a target="_blank" href="#">
              <i>
                <svg
                  className="svg__pastis"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 196.7 196.7"
                  style={{
                    enableBackground: "new 0 0 196.7 196.7",
                  }}
                  xmlSpace="preserve"
                >
                  <defs>
                    <style>
                      {
                        "\r\n      .svg__pastis .a {\r\n        fill: none;\r\n        stroke: #d58e34;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 2px;\r\n      }\r\n    "
                      }
                    </style>
                  </defs>
                  <circle className="a" cx={98.33} cy={98.33} r={97.33} />
                  <path d="M129.5,87.2c-6-3.2-15.3-8.2-24.5-13.4c-0.4-3.3-2.6-6.1-5.9-6.8c0.6-1.5,2-3.9,5.2-4c0.8,0,1.4-0.7,1.3-1.4 c0-0.8-0.7-1.4-1.4-1.3c-4.7,0.3-7.1,4-7.8,6.8c-1.4,0.3-2.6,0.8-3.6,1.7c-6.3,2.9-22,10-24.4,11.1c-1.1,0.6-2.4,1.8-2.4,3.2v32.6 c-0.1,1.3,1.1,2.4,2.6,2.5l60.6,7.2h0.1c1.5,0,2.8-1.3,2.8-2.8V90.1C132.1,88.6,130.7,87.9,129.5,87.2L129.5,87.2z M97.4,69.5 c2.5,0,4.7,2.1,4.7,4.7c0,2.6-2.2,4.6-4.7,4.6c-2.5,0-4.7-2.1-4.7-4.7C92.7,71.4,94.8,69.5,97.4,69.5L97.4,69.5z M90.2,72.5 c-0.1,0.6-0.3,1.1-0.3,1.7c0,4.2,3.3,7.5,7.5,7.5c3.2-0.1,6-2.2,7-5c5.6,3.2,12.5,7,17.4,9.8L73,80.6L90.2,72.5z M128.2,122.7 l-58.7-7.2c-0.6,0-0.8-0.4-0.8-0.8v-8.9c3.1-0.7,4-0.1,5.2,0.6c1,0.6,2.2,1.4,4.5,1.4c0.6,0,1.3,0,2.1-0.1h0.3 c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4c0.6,0,1.3,0,2.1-0.1h0.3c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4 c0.6,0,1.3,0,2.1-0.1h0.3c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4c0.6,0,1.3,0,2.1-0.1h0.3c3.6-1,4.6-0.4,5.9,0.3 c1,0.6,2.2,1.4,4.5,1.4l0.1,8.1C129.2,122.4,128.8,122.8,128.2,122.7L128.2,122.7z M129.2,110.7c-2,0.1-2.6-0.3-3.6-1 c-1.8-1.1-3.6-1.8-7.9-0.7c-2.6,0.4-3.5-0.1-4.6-0.8c-1.8-1.1-3.6-1.8-7.9-0.7c-2.6,0.4-3.5-0.1-4.6-0.8c-1.8-1.1-3.6-1.8-7.9-0.7 c-2.6,0.4-3.5-0.1-4.6-0.8c-1.8-1.1-3.6-1.8-7.9-0.7c-2.6,0.4-3.5-0.1-4.6-0.8c-1.7-1-3.2-1.7-6.5-1V95c3.1-0.7,4-0.1,5.2,0.6 c1,0.6,2.2,1.4,4.5,1.4c0.6,0,1.3,0,2.1-0.1h0.3c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4c0.6,0,1.3,0,2.1-0.1h0.3 c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4c0.6,0,1.3,0,2.1-0.1h0.3c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4 c0.6,0,1.3,0,2.1-0.1h0.3c3.6-1,4.6-0.4,5.9,0.3c1,0.6,2.2,1.4,4.5,1.4V110.7z M129.2,100.1c-2,0.1-2.8-0.3-3.8-1 c-1.8-1.1-3.6-1.8-7.9-0.7c-2.6,0.4-3.5-0.1-4.6-0.8c-1.8-1.1-3.6-1.8-7.9-0.7c-2.6,0.4-3.5-0.1-4.6-0.8c-1.8-1.1-3.6-1.8-7.9-0.7 c-2.6,0.4-3.5-0.1-4.6-0.8c-1.8-1.1-3.6-1.8-7.9-0.7c-2.6,0.4-3.5-0.1-4.6-0.8c-1.7-1-3.2-1.7-6.5-1V84c0-0.7,0.7-1.3,1.4-1.3 l58.2,7.2c0.6,0.1,0.8,0.4,0.8,1V100.1z M129.2,100.1" />
                </svg>
              </i>
              <p>Carta</p>
            </a>
          </li>

          <li>
            <a target="_blank" href="#">
              <i>
                <svg
                  className="svg__chuleton"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 196.67 196.67"
                >
                  <defs>
                    <style>
                      {
                        "\r\n      .svg__chuleton .a {\r\n        fill: none;\r\n        stroke: #d58e34;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 2px;\r\n      }\r\n    "
                      }
                    </style>
                  </defs>
                  <title>{"chuleton"}</title>
                  <circle className="a" cx={98.33} cy={98.33} r={97.33} />
                  <g>
                    <path d="M132.19,99.08a33.42,33.42,0,0,1-7.68-14.61L121,69.53a1.41,1.41,0,0,0-.71-.89l3.76-12a4.48,4.48,0,0,0,.22-1.45,4.75,4.75,0,0,0-9.29-1.41l-4.59,14.72H100.24L104,56.55a4.68,4.68,0,0,0,.21-1.39,4.76,4.76,0,0,0-9.3-1.42L90.28,68.46H81.42L85.13,56.6a4.48,4.48,0,0,0,.22-1.45,4.75,4.75,0,0,0-9.29-1.41L71.47,68.46h-1.6a1.39,1.39,0,0,0-1.31.92L58,98.8a33.2,33.2,0,0,0-.77,20.06,18.1,18.1,0,0,0,6.59,9.69l2.46,1.85a16.66,16.66,0,0,0,10,3.33h47.36a16.54,16.54,0,0,0,11.11-4.26l.2-.17a17.2,17.2,0,0,0,5.67-12.76v-1.71a16.67,16.67,0,0,0-4.29-11.16Zm-14.6-44.5a2,2,0,0,1,3.87.57,2.08,2.08,0,0,1-.09.6l-4,12.71h-4.14Zm-20.07,0a2,2,0,0,1,1.89-1.39,2,2,0,0,1,1.89,2.56l-4,12.71H93.19Zm-18.81,0a2,2,0,0,1,3.87.57,2.08,2.08,0,0,1-.09.6l-4,12.71H74.38ZM86.91,131a13.94,13.94,0,0,1-8.33-2.77l-2.47-1.85a15.38,15.38,0,0,1-5.58-8.26,29.46,29.46,0,0,1-1-6.53l-2.78.14a32.9,32.9,0,0,0,1.16,7.18,18.08,18.08,0,0,0,6.58,9.69l2.47,1.85c.26.19.53.37.81.55H76.29A13.92,13.92,0,0,1,68,128.18l-2.45-1.85a15.34,15.34,0,0,1-5.59-8.25,30.35,30.35,0,0,1,.72-18.35L70.85,71.24H87.93L78,98.8a33.28,33.28,0,0,0-.77,20.06,18.1,18.1,0,0,0,6.59,9.69l2.47,1.85c.26.19.53.37.8.55Zm9.41,0A14,14,0,0,1,88,128.18l-2.46-1.85a15.34,15.34,0,0,1-5.59-8.25,30.42,30.42,0,0,1,.71-18.35L90.89,71.24h15.89L96.89,98.8a33.2,33.2,0,0,0-.77,20.06,18.1,18.1,0,0,0,6.59,9.69l2.46,1.85c.26.19.53.37.8.55Zm41.52-14.41a14.39,14.39,0,0,1-4.69,10.66l-.21.17a13.79,13.79,0,0,1-9.3,3.58h-8.47a13.87,13.87,0,0,1-8.33-2.77l-2.46-1.85a15.34,15.34,0,0,1-5.59-8.25,30.35,30.35,0,0,1,.72-18.35l10.22-28.49h8.78l3.3,13.88A36.29,36.29,0,0,0,130.13,101l4.14,4.58a13.89,13.89,0,0,1,3.57,9.3Z" />
                    <rect
                      x={65.08}
                      y={90.97}
                      width={14.66}
                      height={2.78}
                      transform="translate(-38.96 129.39) rotate(-70.29)"
                    />
                    <polygon points="79.16 77.67 76.55 76.73 75.15 80.61 77.76 81.56 79.16 77.67" />
                    <path d="M92,123.06l-2.25,1.62a17.93,17.93,0,0,0,3.81,3.87l1.66-2.22A15.13,15.13,0,0,1,92,123.06Z" />
                    <path d="M90.38,99.73l-2.61-.93a33.18,33.18,0,0,0-.78,20l1.35-.33,1.33-.42A30.43,30.43,0,0,1,90.38,99.73Z" />
                    <path d="M131.35,106.51a11.37,11.37,0,0,0-5-3.19l-1.37-.43a24.48,24.48,0,0,0-7.26-1.1H109a8.19,8.19,0,0,0-3.7.88,8.61,8.61,0,0,0-4.84,7.71,27.46,27.46,0,0,0,1,7.15,12.36,12.36,0,0,0,4.51,6.58l2.47,1.84a11.05,11.05,0,0,0,6.66,2.23h8.5a11,11,0,0,0,7.42-2.87l.15-.14a11.67,11.67,0,0,0,3.84-8.65v-1.69a11.07,11.07,0,0,0-2.87-7.44Zm.88,10a8.89,8.89,0,0,1-2.93,6.59l-.15.14a8.21,8.21,0,0,1-5.56,2.14H115.1a8.32,8.32,0,0,1-5-1.66l-2.46-1.85a9.66,9.66,0,0,1-3.51-5.1,25.13,25.13,0,0,1-.93-6.45,5.86,5.86,0,0,1,3.35-5.22,5.32,5.32,0,0,1,2.41-.55h8.79a21.56,21.56,0,0,1,6.43,1l1.37.43a8.42,8.42,0,0,1,3.74,2.4l.79.87a8.35,8.35,0,0,1,2.15,5.59Z" />
                    <path d="M106.93,97.86A4.6,4.6,0,0,0,110,99h7.16a4.63,4.63,0,0,0,4.62-4.62,4.52,4.52,0,0,0-.38-1.81,39.08,39.08,0,0,1-2.32-6.84l-2.23-9.33a3.08,3.08,0,0,0-3-2.39,3.12,3.12,0,0,0-2.91,2.06L105,92.32a4.61,4.61,0,0,0,1.31,5Zm.73-4.6L113.49,77a.31.31,0,0,1,.3-.23.32.32,0,0,1,.33.25l2.22,9.35a43,43,0,0,0,2.49,7.32,1.71,1.71,0,0,1,.14.67,1.91,1.91,0,0,1-.56,1.31,1.86,1.86,0,0,1-1.28.54H110a1.85,1.85,0,0,1-1.21-.47l-.59-.5a1.85,1.85,0,0,1-.51-2Z" />
                  </g>
                </svg>
              </i>
              {/* <!-- <p></p> --> */}
              <p>botiga</p>
            </a>
          </li>

          {/* <li>
            <a
              target="_blank"
              href="https://mooma.cat/wp-content/uploads/2023/01/Calendari-2023.pdf"
            >
              <i>
                <svg
                  className="svg__calendari"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 196.67 196.67"
                >
                  <defs>
                    <style>
                      {
                        "\r\n      .svg__calendari .a {\r\n        fill: none;\r\n        stroke: #313131;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 2px;\r\n      }\r\n    "
                      }
                    </style>
                  </defs>
                  <title>{"calendari"}</title>
                  <circle className="a" cx={98.33} cy={98.33} r={97.33} />
                  <g>
                    <path d="M116.46,64.22a6.41,6.41,0,0,0-6.28-5.13,1.28,1.28,0,1,0,0,2.56,3.85,3.85,0,1,1,0,7.69,1.29,1.29,0,0,0,0,2.57,6.43,6.43,0,0,0,6.28-5.13h16.79V78.31H64.05V66.78H85.83a1.28,1.28,0,1,0,0-2.56H83.51a3.84,3.84,0,1,1,3.61,5.12,1.29,1.29,0,1,0,0,2.57,6.41,6.41,0,1,0-6.29-7.69H61.49v67.91h74.32V64.22Zm16.79,65.35H64.05V80.88h69.2Zm0,0" />
                    <path d="M94.8,61.65a3.85,3.85,0,1,1,0,7.69,1.29,1.29,0,0,0,0,2.57,6.41,6.41,0,1,0,0-12.82,1.28,1.28,0,1,0,0,2.56Zm0,0" />
                    <path d="M102.49,61.65a3.85,3.85,0,1,1,0,7.69,1.29,1.29,0,0,0,0,2.57,6.41,6.41,0,1,0,0-12.82,1.28,1.28,0,1,0,0,2.56Zm0,0" />
                    <path d="M91,89.85a1.28,1.28,0,1,1-1.28-1.29A1.28,1.28,0,0,1,91,89.85Zm0,0" />
                    <path d="M99.93,89.85a1.28,1.28,0,1,1-1.28-1.29,1.28,1.28,0,0,1,1.28,1.29Zm0,0" />
                    <path d="M108.9,89.85a1.28,1.28,0,1,1-1.28-1.29,1.28,1.28,0,0,1,1.28,1.29Zm0,0" />
                    <path d="M117.87,89.85a1.28,1.28,0,1,1-1.28-1.29,1.28,1.28,0,0,1,1.28,1.29Zm0,0" />
                    <path d="M126.84,89.85a1.28,1.28,0,1,1-1.28-1.29,1.28,1.28,0,0,1,1.28,1.29Zm0,0" />
                    <path d="M73,100.1a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,73,100.1Zm0,0" />
                    <path d="M82,100.1a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,82,100.1Zm0,0" />
                    <path d="M91,100.1a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,91,100.1Zm0,0" />
                    <path d="M99.93,100.1a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M108.9,100.1a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M117.87,100.1a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M126.84,100.1a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M73,109.07a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,73,109.07Zm0,0" />
                    <path d="M82,109.07a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,82,109.07Zm0,0" />
                    <path d="M91,109.07a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,91,109.07Zm0,0" />
                    <path d="M99.93,109.07a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M108.9,109.07a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M117.87,109.07a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M126.84,109.07a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M73,119.32A1.28,1.28,0,1,1,71.74,118,1.28,1.28,0,0,1,73,119.32Zm0,0" />
                    <path d="M82,119.32A1.28,1.28,0,1,1,80.71,118,1.28,1.28,0,0,1,82,119.32Zm0,0" />
                    <path d="M91,119.32A1.28,1.28,0,1,1,89.68,118,1.28,1.28,0,0,1,91,119.32Zm0,0" />
                    <path d="M99.93,119.32A1.28,1.28,0,1,1,98.65,118a1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                    <path d="M108.9,119.32a1.28,1.28,0,1,1-1.28-1.28,1.28,1.28,0,0,1,1.28,1.28Zm0,0" />
                  </g>
                </svg>
              </i>
              <p></p>
              <p>2023</p>
            </a>
          </li> */}
        </ol>
      </section>

      <button
        onClick={() => window.open("#", "_self")}
        className="e-btn__reserva"
      >
        RESERVAR TAULA
      </button>

      <picture className="c-page__banner-bottom">
        <source
          media="(min-width: 2000px)"
          srcSet="https://mooma.cat/wp-content/themes/mooma/assets/img/sidreria-restaurant/2x/sidreria-restaurant__banner-bottom2021@2x.jpg"
        />

        <img
          src="https://mooma.cat/wp-content/themes/mooma/assets/img/sidreria-restaurant/1x/sidreria-restaurant__banner-bottom2021@1x.jpg"
          alt="Sidreria Mooma de l'alt Empordà"
        />

        <div className="c-page__banner-bottom-description">
          <div>
            <h3
              className="c-page__banner-bottom-description-title e-animation-text-focus-in-100"
              id="js-c-page__banner-bottom-description-title"
            >
              <p>
                PLATS FRESCOS PER COMPARTIR,
                <br />
                CARN A LA BRASA I MOLT MÉS,
                <br />
                ENVOLTATS DE POMERES AL BELL MIG DE L’EMPORDÀ.
              </p>
            </h3>
          </div>
        </div>
      </picture>
    </section>
  );
};

export default Hero;
