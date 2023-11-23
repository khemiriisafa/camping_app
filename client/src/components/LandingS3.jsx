import React from "react";
import { dataS3 } from "../dataS3";
import CardS3 from "./CardS3";
import HomeBtn from "./HomeBtn";
function LandingS3() {
  return (
    <div className="S3-bigcontainer">
      <div className="s3pic">
        <img src="../assets/p3.webp" alt="" className="S3pic" />
      </div>
      <div className="S3-bigpart" width="50%">
        <div className="S3bigpart-1">
          <h1 className="yellow-title">Change the way you travel!</h1>
          <p className="s3bigp">Have fun with our amazing camping ground</p>
          <p>
            Experience a remarkable shift in your travel adventures! Unleash the
            joy at our stunning camping ground, where unforgettable memories
            await.
          </p>
        </div>
        <div className="S3-cadre">
          {dataS3.map((elt) => (
            <CardS3 {...elt} />
          ))}
        </div>

        <HomeBtn text="book now" />
      </div>
    </div>
  );
}

export default LandingS3;
