import React from "react";
import { HeroBg, HeroOverlay, HeroWrapperIcon } from "./HeroImg.styled";

export const HeroImg = ({ children }) => {
  return (
    <HeroBg>
      <HeroOverlay />
      <HeroWrapperIcon>{children}</HeroWrapperIcon>
    </HeroBg>
  );
};
