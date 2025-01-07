import React from "react";
import {
  AddPetButton,
  AddPetHead,
  AddPetIcon,
  AddPetTitle,
} from "./AddPet.styled";
import icon from "../../images/sprite.svg";

const AddPet = () => {
  return (
    <AddPetHead>
      <AddPetTitle>My pets</AddPetTitle>
      <AddPetButton to="/addPet">
        Add pet
        <AddPetIcon>
          {" "}
          <use href={`${icon}#icon-plus`} />
        </AddPetIcon>
      </AddPetButton>
    </AddPetHead>
  );
};

export default AddPet;
