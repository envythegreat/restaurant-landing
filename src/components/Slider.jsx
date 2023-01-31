import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
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
              <Swiper
                slidesPerView={4}
                // centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                id="owl-example"
                className="owl-carousel owl-theme"
              >
                {sliderItems.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className="item">
                      <img
                        className="img-responsive"
                        src={item.imgSrc}
                        alt={item.alt}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
