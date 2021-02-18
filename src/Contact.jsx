import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "./images/mail.svg";
import img2 from "./images/call.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1 className="text-center mb-5">Contact Me</h1>
        <div className="container">
          <div row>
            <div className="col-10 mx-auto">
              <div className="row justify-content-around">
                <div className="col-md-4 col-10 divider d-flex align-content-center justify-content-between flex-column">
                  <img src={img1} className="img-fluid mb-2" alt="mail us" />
                  <h2 className=" text-uppercase text-center">Mail address</h2>
                </div>

                <div className="col-md-4 col-10  divider d-flex align-content-center justify-content-between flex-column">
                  <img src={img2} className="img-fluid mb-2" alt="call us" />
                  <h2 className=" text-uppercase text-center">Phone Number</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mx-auto banner d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-capitalize">
                  I'm <strong>Available</strong> for freelancing
                </h1>
                <div>
                  <NavLink className="get-your-btn" to="/">
                    Hire Me
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-2">
          <div row className="d-flex justify-content-center">
            <div className="col-md-6 mx-auto d-flex justify-content-center flex-column">
              <h1 className="text-center"> Roshan Thapa.</h1>
              <p className="text-uppercase text-center">Follow Me</p>
              <ul className="social-icons d-flex justify-content-around">
                <li>
                  <a>
                    <FaInstagram className="icon" />
                  </a>
                </li>
                <li>
                  <a>
                    <FaLinkedin className="icon" />
                  </a>
                </li>
                <li>
                  <a>
                    <FaFacebookSquare className="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-75 mx-auto">
        <p className="text-center">
          Copyright © 2020| This website is made by Roshan Thapa
        </p>
      </div>
    </>
  );
};

export default Contact;
