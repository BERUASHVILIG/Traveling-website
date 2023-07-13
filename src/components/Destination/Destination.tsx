import React from "react";
import DestinationData from "../DestinationData";

import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destiantion</h1>
      <p>Tours Give you opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside and island. if your fancy a closer look, the
            hike up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you will see
            the pecuilar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for early morning trip, and then unwind sith some bulalo before
            heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you are looking for a hike that's a little more challenging but still good for a beginnner mountaineer, check out Mt. Daguldul
        in  San Juan, Batangas. You'll start  your hike from the beach and pass through tropical forest different rock formations, and small
        streams. there's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself 
        may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing well-deserved swim."
        img1={Mountain3}
        img2={Mountain4}
      />
      {/* <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside and island. if your fancy a closer look, the
            hike up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you will see
            the pecuilar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for early morning trip, and then unwind sith some bulalo before
            heading back home!
          </p>
        </div>
        <div className="image">
          <img src={Mountain1} alt="" />
          <img src={Mountain2} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Destination;
