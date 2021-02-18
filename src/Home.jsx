import React from "react";
import pic1 from "../src/images/img1.svg";
import Template from "./components/Template";

const Home = () => {
  return (
    <>
      <Template
        msg1="Grow your Business with"
        msg2=" Thapa Roshan"
        msg3="I am highly enthusastic web developer"
        btn="Contact me"
        pic={pic1}
      />
    </>
  );
};

export default Home;
