import React from "react";
import { AddPetContainer } from "./PetsBlock.styled";
import icon from "../../images/sprite.svg";
import AddPet from "../AddPet/AddPet";
import PetsList from "../PetsList/PetsList";

const PetsBlock = () => {
  return (
    <AddPetContainer>
      <AddPet />
      <PetsList />
    </AddPetContainer>
  );
};

export default PetsBlock;
