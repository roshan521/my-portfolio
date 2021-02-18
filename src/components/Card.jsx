import React from "react";
import { NavLink } from "react-router-dom";
import img from "../images/img3.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10">
        <div className="card">
          <img src={img} className="card-img-top" alt="title pic" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
