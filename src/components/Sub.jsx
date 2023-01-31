import React from "react";

const Sub = () => {
  return (
    <section id="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h1
                className=" heading wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="300ms"
              >
                {" "}
                SUBSCRIBE <span>to our</span> NEWSLETTER
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="400ms"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod{" "}
              </p>
              <form className="form-inline">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAmount"
                      placeholder="Enter your email to subscribe..."
                    />
                    <div className="input-group-addon">
                      <button className="btn btn-default" type="submit">
                        subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sub;
