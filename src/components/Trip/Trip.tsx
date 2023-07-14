import React from "react";
import TripData from "./TripData";

import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/6.jpg";
import Trip3 from "../../assets/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripCard">
        <TripData
          heading="Trip in Indonesia"
          text="Indonesia, officially the Rebublic of Indonesia is a Country in Southest
           Asia and Oceania between the Indian and Pacific oceans. It consisiy of over 
           17,000 islands including Sumatra, Java, Sulawesi, and part of Borneo and New Guinea"
          image={Trip1}
        />
      </div>
    </div>
  );
};

export default Trip;
