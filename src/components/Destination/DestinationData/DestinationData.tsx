import "../DestiantionStyles.css";

import React from "react";

const DestinationData = (props: any) => {
  return (
    <div>
      <div className="destination">
<<<<<<< HEAD:src/components/DestinationData/DestinationData.tsx
        {/* <h1>Popular Destiantion</h1>
        <p>Tours Give you opportunity to see a lot, within a time frame</p> */}
        <div className={props.className}>
=======
        <div className="first-des">
>>>>>>> Develop-pages:src/components/Destination/DestinationData/DestinationData.tsx
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
