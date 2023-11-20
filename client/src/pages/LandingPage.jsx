import React from "react";
import Publicnavbar from "../components/Publicnavbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LandingS1 from "../components/LandingS1";

function LandingPage() {
  return (
    <div>
      <Publicnavbar />

      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="../assets/p1.webp" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/p2.webp" alt="Image 2" />
        </SplideSlide>
      </Splide>


      <LandingS1/>
    </div>
  );
}

export default LandingPage;
