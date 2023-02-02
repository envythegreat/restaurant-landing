import React from "react";

const NewsLetters = () => {
  return (
    <section className="c-newsletter-momma">
      <div className="c-newsletter-momma__container">
        <div className="c-newsletter-momma__container-row">
          <div className="c-newsletter-momma__header">
            <header>
              <h2>NEWSLETTER MASIA LA VEGA </h2>
              <p>
                <small>
                  Vols estar al dia dels nostres productes i novetats?
                </small>
              </p>
            </header>
          </div>

          <div className="c-newsletter-momma__form">
            <form onClick={() => alert('Estem desenvolupant el sistema d\'inscripccó a la nostra newsletter del web de MOOMA, disculpis les molèsties.')}>
              <label>
                <p>Escriu el teu e-mail</p>
                <input type="" name="" placeholder="Escriu el teu e-mail" />
              </label>
              <label>
                <p>INSCRIURE’S</p>
                <button type="submit">INSCRIURE’S</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetters;
