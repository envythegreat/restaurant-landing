import React from "react";

import logo from "@assets/img/logo.png";
import header from "@assets/img/header.jpg";

const Header = () => {
  const navItems = [
    { id: 1, name: "Home", link: "#hero-area" },
    { id: 2, name: "About Us", link: "#about-us" },
    { id: 3, name: "Blog", link: "#blog" },
    { id: 4, name: "Menu", link: "#price" },
    { id: 5, name: "News", link: "#subscribe" },
    { id: 6, name: "Contacts", link: "#contact-us" },
  ];
  return (
    <div>
      <section id="hero-area">
        <img className="img-responsive" src={header} alt="" />
      </section>
      <nav id="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" />
                      </a>
                    </div>

                    <div
                      className="collapse navbar-collapse"
                      id="bs-example-navbar-collapse-1"
                    >
                      <ul className="nav navbar-nav navbar-right" id="top-nav">
                        {navItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <a href={item.link}>{item.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Header;