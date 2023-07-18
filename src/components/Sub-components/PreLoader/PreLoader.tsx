import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../../../utils/animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-contianer">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Student</span>
      </div>
    </div>
  );
};

export default PreLoader;
