import Aos from "aos";
import "../DestiantionStyles.css";

import React, { useEffect } from "react";

const DestinationData = (props: any) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="destination" data-aos="zoom-in-up">
        <div className={props.className}>
          <div className="des-text">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
          </div>
          <div className="image">
            <img src={props.img1} alt="" />
            <img src={props.img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
