import React from "react";
import Template from "./components/Template";
import img from "../src/images/img2.jpg";

const About = () => {
  return (
    <>
      <Template
        msg1=""
        msg2="About me"
        msg3="I am a Bsc.CSIT student currently studying in 7th semester.I am have a skill of frontend and practicing the backend skill.I prefer using the weapon named ReactJs and I have done some amazing project through it."
        btn="Download Resume"
        pic={img}
      />
    </>
  );
};

export default About;
