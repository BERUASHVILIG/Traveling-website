import React from "react";
import Hero from "../../components/Hero";
import hero from "../../assets/12.jpg";
import Destination from "../../components/Destination";
import Trip from "../../components/Trip";

const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={hero}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnText="Travel Plan"
        btnClass="show"
        url="/"
      />
      <Destination />
      <Trip />
    </div>
  );
};

export default Home;
