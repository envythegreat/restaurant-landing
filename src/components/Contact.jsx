import React from 'react'

const Contact = () => {
  return (
    <section id="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block">
                        <h1 className="heading wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">our <span>CONTACT US</span></h1>
                        <h3 className="title wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">Sign Up for <span>Email Alerts</span> </h3>
                        <form>
                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Write your full name here..." />
                            </div>
                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="800ms">
                                <input type="text" className="form-control" placeholder="Write your email address here..." />
                            </div>
                            <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1000ms">
                                <textarea className="form-control" rows="3" placeholder="Write your message here..."></textarea>
                            </div>
                        </form>
                        <a className="btn btn-default wow bounceIn" data-wow-duration="500ms" data-wow-delay="1300ms" href="#" role="button">send your message</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
