import React, { useEffect } from "react";
import "../TripStyles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TripData = (props: any) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>
      <div data-aos="zoom-out-right">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TripData;
