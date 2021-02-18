import React from "react";
import { NavLink } from "react-router-dom";

const Template = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10  mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.msg1}
                    <strong className="brand-name">{props.msg2}</strong>
                  </h1>
                  <h2 className="my-3">{props.msg3}</h2>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to="/contact">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header-img d-flex justify-content-center">
                  <img src={props.pic} className="img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Template;
