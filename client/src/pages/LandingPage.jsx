import React from "react";
import Publicnavbar from "../components/Publicnavbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LandingS1 from "../components/LandingS1";
import HomeBtn from "../components/HomeBtn";
import Carditem from "../components/Carditem";
import { data } from "../icon-data";
import LnadingS2 from "../components/LnadingS2";
import LandingS3 from "../components/LandingS3";

function LandingPage() {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };
  return (
    <div>
      <Publicnavbar />
      <Splide aria-label="My Favorite Images" options={options}>
        <SplideSlide className="slide1-container">
          <img src="../assets/p1.webp" alt="Image 1" />
          <div className="s1part1">
            <h1 className="titres1"> connect with nature </h1>
            <p className="s1p">
              Camping in nature offers a host of benefits that rejuvenate the
              mind and body. Being immersed in the outdoors provides a welcome
              break from the demands of everyday life, allowing individuals to
              unwind and recharge. The fresh air and natural surroundings
              contribute to improved physical health, while the absence of
              modern distractions fosters mental clarity and reduces stress.
            </p>
            <HomeBtn text="Check events" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/p2.webp" alt="Image 2" />
          <div className="s1part1">
            <h1 className="titres1"> connect with nature </h1>
            <p className="s1p">
              Camping in nature offers a host of benefits that rejuvenate the
              mind and body. Being immersed in the outdoors provides a welcome
              break from the demands of everyday life, allowing individuals to
              unwind and recharge. The fresh air and natural surroundings
              contribute to improved physical health, while the absence of
              modern distractions fosters mental clarity and reduces stress.
            </p>
            <HomeBtn text="Check events" />
          </div>
        </SplideSlide>
      </Splide>
      <LandingS1 />
      <LnadingS2 />
      <LandingS3/>
    </div>
  );
}

export default LandingPage;
