import React from "react";
//images/blog/blog-img-3.jpg
import img1 from "@assets/img/blog/blog-img-1.jpg";
import img2 from "@assets/img/blog/blog-img-2.jpg";
import img3 from "@assets/img/blog/blog-img-3.jpg";
import img4 from "@assets/img/blog/blog-img-4.jpg";
import img5 from "@assets/img/blog/blog-img-5.jpg";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h1 className="heading">
                Latest <span>From</span> the <span>Blog</span>
              </h1>
              <ul>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="300ms"
                  data-wow-delay="300ms"
                >
                  <div className="blog-img">
                    <img src={img1} alt="blog-img" />
                  </div>
                  <div className="content-right">
                    <h3>Homestyle Chicken Pot Pie</h3>
                    <p>
                      Prepared in true New England fash-ion. Tender all-white
                      meat chicken simmered...
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="300ms"
                  data-wow-delay="400ms"
                >
                  <div className="blog-img">
                    <img src={img2} alt="blog-img" />
                  </div>
                  <div className="content-right">
                    <h3>Homestyle Chicken Pot Pie</h3>
                    <p>
                      Prepared in true New England fash-ion. Tender all-white
                      meat chicken simmered...
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="300ms"
                  data-wow-delay="500ms"
                >
                  <div className="content-left">
                    <h3>Homestyle Chicken Pot Pie</h3>
                    <p>
                      Prepared in true New England fash-ion. Tender all-white
                      meat chicken simmered...
                    </p>
                  </div>
                  <div className="blog-img-2">
                    <img src={img3} alt="blog-img" />
                  </div>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="300ms"
                  data-wow-delay="600ms"
                >
                  <div className="content-left">
                    <h3>Homestyle Chicken Pot Pie</h3>
                    <p>
                      Prepared in true New England fash-ion. Tender all-white
                      meat chicken simmered...
                    </p>
                  </div>
                  <div className="blog-img-2">
                    <img src={img4} alt="blog-img" />
                  </div>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="300ms"
                  data-wow-delay="700ms"
                >
                  <div className="blog-img">
                    <img src={img5} alt="blog-img" />
                  </div>
                  <div className="content-right">
                    <h3>Homestyle Chicken Pot Pie</h3>
                    <p>
                      Prepared in true New England fash-ion. Tender all-white
                      meat chicken simmered...
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="300ms"
                  data-wow-delay="800ms"
                >
                  <div className="blog-img">
                    <img src={img5} alt="blog-img" />
                  </div>
                  <div className="content-right">
                    <h3>Homestyle Chicken Pot Pie</h3>
                    <p>
                      Prepared in true New England fash-ion. Tender all-white
                      meat chicken simmered...
                    </p>
                  </div>
                </li>
              </ul>
              <a
                className="btn btn-default btn-more-info wow bounceIn"
                data-wow-duration="500ms"
                data-wow-delay="1200ms"
                href="#"
                role="button"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
