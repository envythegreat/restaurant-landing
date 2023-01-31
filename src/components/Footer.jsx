import React from "react";


import { Facebook, Phone, Map, Mail, Instagram } from "react-feather";


import photo1 from "@assets/img/photo/photo-1.jpg";
import photo2 from "@assets/img/photo/photo-2.jpg";
import photo3 from "@assets/img/photo/photo-3.jpg";
import photo4 from "@assets/img/photo/photo-4.jpg";

const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="block wow fadeInLeft" data-wow-delay="200ms">
              <h3>
                CONTACT <span>INFO</span>
              </h3>
              <div class="info">
                <ul>
                  <li>
                    <h4>
                      <i class="fa "><Phone /></i>Telefone
                    </h4>
                    <p>(000) 123 456 78- (000) 123 4567 89</p>
                  </li>
                  <li>
                    <h4>
                      <i class="fa "> <Map /> </i>Address
                    </h4>
                    <p>2046 Blue Spruce Lane Laurel Canada</p>
                  </li>
                  <li>
                    <h4>
                      <i class="fa"><Mail /></i>E mail
                    </h4>
                    <p>rest@gmail.com - rest@mail.ru</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="block wow fadeInLeft" data-wow-delay="700ms">
              <h3>
                LATEST <span>BLOG POSTS</span>
              </h3>
              <div class="blog">
                <ul>
                  <li>
                    <h4>
                      <a href="#">Nov 9-2014</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                      Curabitur ut blandit sapien
                    </p>
                  </li>
                  <li>
                    <h4>
                      <a href="#">Sep 8-2014</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip iscing elit.
                      Curabitur ut blandit sapien
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="block wow fadeInLeft" data-wow-delay="1100ms">
              <div class="gallary">
                <h3>
                  PHOTO <span>STREAM</span>
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      <img src={photo1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={photo2} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={photo3} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={photo4} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="social-media-link">
                <h3>
                  Follow <span>US</span>
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa"><Facebook /></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa"><Instagram /> </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
