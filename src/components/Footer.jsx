import React from "react";

const Footer = () => {
  return (
    <footer class="footer" id="footer">
      <div class="footer__container">
        <div class="footer__container-row">
          <div class="footer__col footer__col--left">
            <ul class="footer__text">
              <li>
                <a
                  href="https://mooma.cat/politica-de-privadesa/"
                  title="https://mooma.cat/politica-de-privadesa/"
                >
                  Política de privadesa
                </a>
              </li>
              <li>
                <a
                  href="https://mooma.cat/avis-legal/"
                  title="https://mooma.cat/avis-legal/"
                >
                  Avís legal
                </a>
              </li>
              <li>
                <a
                  href="https://mooma.cat/politica-de-cookies/"
                  title="https://mooma.cat/politica-de-cookies/"
                >
                  Política de cookies
                </a>
              </li>
              <li>
                <a
                  href="https://mooma.cat/condicions-generals-de-compra/"
                  title="https://mooma.cat/condicions-generals-de-compra/"
                >
                  Condicions generals de compra
                </a>
              </li>
            </ul>
            <ul class="footer__text">
              <li rel="license">
                <abbr title="Tots els drets resertvat © 2019 Mooma">
                  © 2023 Mooma{" "}
                </abbr>
              </li>
              <li>
                <a href="https://mooma.cat/contacte/" title="Contacta’ns">
                  Contacta’ns
                </a>
              </li>

              <li>
                <a
                  href="https://mooma.cat/credits/"
                  title="Crèdits disseny web"
                >
                  Crèdits
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__col footer__col--right">
            <aside class="footer__social">
              <ol>
                <li>
                  <a
                    href="https://es-es.facebook.com/sidreriamooma/"
                    target="_blank"
                    title="Anar a Facebook de Mooma"
                  >
                    Facebook
                    <i>
                      <img
                        src="https://mooma.cat/wp-content/themes/mooma/assets/svg/facebook.svg"
                        alt="Xaraxa social Facebook"
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/sidreriamooma"
                    target="_blank"
                    title="Anar a Twitter de Mooma"
                  >
                    Twitter
                    <i>
                      <img
                        src="https://mooma.cat/wp-content/themes/mooma/assets/svg/twitter.svg"
                        alt="Xaraxa social Twitter de Mooma"
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCUpVeVqgaHTxAxmY3EDE9iQ"
                    title="Anar a Youtube"
                    target="_blank"
                  >
                    Youtube
                    <i>
                      <img
                        src="https://mooma.cat/wp-content/themes/mooma/assets/svg/youtube.svg"
                        alt="Xaraxa social Youtube de Mooma"
                      />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mooma/"
                    target="_blank"
                    title="Anar a Instagram"
                  >
                    Linkedin
                    <i>
                      <img
                        src="https://mooma.cat/wp-content/themes/mooma/assets/svg/linkedin.svg"
                        alt="Xaraxa social Linkedin de Mooma"
                      />
                    </i>
                  </a>
                </li>
              </ol>
            </aside>
          </div>
        </div>
      </div>
      <section class="c-pop-up-enter" id="js-c-pop-up-enter" data-modal="true">
        <div class="c-pop-up-enter__super">
          <header>
            <h2>
              Quina edat tens per
              <br /> beure’t una Mooma
            </h2>
          </header>
          <div class="c-pop-up-enter__container">
            <button
              data-fancybox-close=""
              class="e-btn__popup e-btn__popup--inline-block btn"
              id="js-c-pop-up-enter__is-event-click"
            >
              + 18 anys
            </button>
            <button
              onclick="window.open('https://google.com','_self')"
              class="e-btn__popup e-btn__popup--inline-block btn"
            >
              - 18 anys
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
