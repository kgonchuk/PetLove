import React from "react";
import { AddPetContainer } from "./AddPetPage.styled";
import PetBlock from "../components/PetBlock/PetBlock";

import addPetDesc from "../images/addPet/addPetDesc.png";
import addPetDesc2x from "../images/addPet/addPetDesc@2x.png";
import addPetTab from "../images/addPet/addPetTab.png";
import addPetTab2x from "../images/addPet/addPetTab@2x.png";
import addPetMob from "../images/addPet/addPetMob.png";
import addPetMob2x from "../images/addPet/addPetMob@2x.png";
import AddPetForm from "../components/AddPetForm/AddPetForm";

const AddPetPage = () => {
  return (
    <>
      {" "}
      <AddPetContainer>
        <PetBlock>
          <picture>
            <source
              media="(min-width:1280px)"
              srcSet={`  ${addPetDesc2x} 2x ,${addPetDesc} 1x`}
              sizes="1280px"
            />
            <source
              media="(min-width:768px)"
              srcSet={`  ${addPetTab2x} 2x ,${addPetTab} 1x`}
              sizes="1280px"
            />
            <source
              media="(min-width:320px)"
              srcSet={`  ${addPetMob2x} 2x ,${addPetMob} 1x`}
              sizes="1280px"
            />
            <img src={addPetMob} alt="The dog with glasses" />
          </picture>
        </PetBlock>
        <AddPetForm />
      </AddPetContainer>
    </>
  );
};

export default AddPetPage;
