import React from "react";
import serviceImg from "../../assets/2.jpg";
import Hero from "../../components/Hero";
import Trip from "../../components/Trip";

const Service = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={serviceImg} title="service" />
      <Trip />
    </div>
  );
};

export default Service;
