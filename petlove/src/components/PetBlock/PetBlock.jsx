import React from "react";
import { PetBlockContainer } from "./PetBlock.styled";

const PetBlock = ({ children }) => {
  return <PetBlockContainer>{children}</PetBlockContainer>;
};

export default PetBlock;
