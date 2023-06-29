import React from "react";
import { urlFor } from "../sanity";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const AboutProfile = ({ aboutProfile }) => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      resetOnLeave
      className="cursor-pointer"
    >
      <div className="relative m-auto w-full mt-20 flex justify-center items-center h-auto ">
        <MouseParallaxChild
          className="relative z-10 "
          factorX={0.1}
          factorY={0.1}
        >
          <img
            className="relative rounded-md left-3"
            width="200"
            src={urlFor(aboutProfile.aboutProfile[2].img).url()}
            alt=""
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          className="relative z-0"
          factorX={0.1}
          factorY={0.1}
        >
          <img
            className=" relative right-3 rounded-md"
            width="250"
            src={urlFor(aboutProfile.aboutProfile[1].img).url()}
            alt=""
          />
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
};

export default AboutProfile;
