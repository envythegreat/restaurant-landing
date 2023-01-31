import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "@assets/img/slider/slider-img-1.jpg";
import img2 from "@assets/img/slider/slider-img-2.jpg";
import img3 from "@assets/img/slider/slider-img-3.jpg";
import img4 from "@assets/img/slider/slider-img-4.jpg";

const Slider = () => {

  const sliderItems = [
    {
      id: 1,
      imgSrc: img1,
      alt: "",
    },
    {
      id: 2,
      imgSrc: img2,
      alt: "",
    },
    {
      id: 3,
      imgSrc: img3,
      alt: "",
    },
    {
      id: 4,
      imgSrc: img4,
      alt: "",
    },
    {
      id: 5,
      imgSrc: img1,
      alt: "",
    },
    {
      id: 6,
      imgSrc: img2,
      alt: "",
    },
  ];

  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="block fadeInUp"
              data-wow-duration="500ms"
              data-wow-delay="300ms"
            >
              <div className="title">
                <h3>
                  Featured <span>Works</span>
                </h3>
              </div>
              <OwlCarousel id="owl-example" className="owl-carousel owl-theme" loop margin={10}>
                {
                  sliderItems.map((item) => {
                    return (
                      <div key={item.id} className="item">
                        <img

                          className="img-responsive"
                          src={item.imgSrc}
                          alt={item.alt}
                        />
                      </div>
                    );
                  })
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
