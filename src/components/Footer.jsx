import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__container-row">
          <div className="footer__col footer__col--left">
            <ul className="footer__text">
              <li>
                <a
                  href="#"
                  title="#"
                >
                  Política de privadesa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="#"
                >
                  Avís legal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="#"
                >
                  Política de cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="#"
                >
                  Condicions generals de compra
                </a>
              </li>
            </ul>
            <ul className="footer__text">
              <li rel="license">
                <abbr title="Tots els drets resertvat © 2019 Mooma">
                  © 2023 Masia Lavega{" "}
                </abbr>
              </li>
              <li>
                <a href="#" title="Contacta’ns">
                  Contacta’ns
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title="Crèdits disseny web"
                >
                  Crèdits
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col footer__col--right">
            <aside className="footer__social">
              <ol>
                <li>
                  <a
                    href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
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
      <section className="c-pop-up-enter" id="js-c-pop-up-enter" data-modal="true">
        <div className="c-pop-up-enter__super">
          <header>
            <h2>
              Quina edat tens per
              <br /> beure’t una Masia Lavega
            </h2>
          </header>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
