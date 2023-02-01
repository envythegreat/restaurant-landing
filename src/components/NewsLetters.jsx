import React from "react";

const NewsLetters = () => {
  return (
    <section class="c-newsletter-momma">
      <div class="c-newsletter-momma__container">
        <div class="c-newsletter-momma__container-row">
          <div class="c-newsletter-momma__header">
            <header>
              <h2>NEWSLETTER MOOMA </h2>
              <p>
                <small>
                  Vols estar al dia dels nostres productes i novetats?
                </small>
              </p>
            </header>
          </div>

          <div class="c-newsletter-momma__form">
            <form action="javascript:alert('Estem desenvolupant el sistema d\'inscripccó a la nostra newsletter del web de MOOMA, disculpis les molèsties.')">
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
