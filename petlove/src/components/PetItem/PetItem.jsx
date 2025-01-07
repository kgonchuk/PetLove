import React from "react";
import {
  ItemDetailsWrap,
  ItenImgWrap,
  PetItemContainer,
  PetItemSpeciesList,
  PetSpeciesDesc,
  PetSpeciesItem,
} from "./PetItem.styled";

const PetItem = ({ pet }) => {
  return (
    // <PetItemContainer>
    //   <ItenImgWrap>
    //     <img src={petItem.img} alt="petImage" />
    //   </ItenImgWrap>
    //   <ItemDetailsWrap>
    //     <h2>{petItem.title}</h2>
    //     <PetItemSpeciesList>
    //       <PetSpeciesItem>
    //         Name
    //         <PetSpeciesDesc>{petItem.name}</PetSpeciesDesc>
    //       </PetSpeciesItem>
    //       <PetSpeciesItem>
    //         Birthday
    //         <PetSpeciesDesc>{petItem.birthday}</PetSpeciesDesc>
    //       </PetSpeciesItem>
    //       <PetSpeciesItem>
    //         Sex
    //         <PetSpeciesDesc>{petItem.sex}</PetSpeciesDesc>
    //       </PetSpeciesItem>
    //       <PetSpeciesItem>
    //         Species
    //         <PetSpeciesDesc>{petItem.species}</PetSpeciesDesc>
    //       </PetSpeciesItem>
    //     </PetItemSpeciesList>
    //   </ItemDetailsWrap>
    // </PetItemContainer>
    <li>
      <img src={pet.imgURL} alt="Pet foto" />

      <div>
        <h2>{pet.title}</h2>

        <div>
          <div>
            <h3>Name</h3>
            <p>{pet.name}</p>
          </div>
          <div>
            <h3>Birthday</h3>
            <p>{pet.birthday}</p>
          </div>
          <div>
            <h3>Sex</h3>
            <p>{pet.sex}</p>
          </div>
          <div>
            <h3>Species</h3>
            <p>{pet.species}</p>
          </div>
        </div>
      </div>
      <button></button>
    </li>
  );
};

export default PetItem;
