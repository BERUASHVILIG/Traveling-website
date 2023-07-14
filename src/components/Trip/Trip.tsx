import React from "react";
import TripData from "./TripData";

import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/6.jpg";
import Trip3 from "../../assets/3.jpg";

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
        <TripData
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country
          occupying parts of the Malay Peninsula
          and the island of Borneo, it's known for its
          beaches, rainforests
          and mix of Malay.
          Chinese, Indian and European cultural
          influences."
          image={Trip2}
        />
        <TripData
          heading="Trip in France"
          text="France, in Western Europe, encompasses
          medieval cities, alpine villages and
          Mediterranean beaches. Paris, its capital, is
          tamed for its fashion houses, classical art
          museums including the Louvre and
          monuments like the Eiffel Tower."
          image={Trip3}
        />
      </div>
    </div>
  );
};

export default Trip;
