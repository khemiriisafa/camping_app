import React from "react";
import Carditem from "./Carditem";
import { data } from "../icon-data";
function LnadingS2() {
  return (
    <div className="landing-s2-container">
      {data.map((elt) => (
        <Carditem {...elt} />
      ))}
    </div>
  );
}

export default LnadingS2;
