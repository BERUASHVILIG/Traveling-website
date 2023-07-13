import React from "react";
import Hero from "../../components/Hero";
import about from "../../assets/night.jpg";

const About = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={about} title="About" btnClass="hide" />
    </div>
  );
};

export default About;
