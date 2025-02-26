// // import React from "react";
// // import {
// //   ItemDetailsWrap,
// //   ItenImgWrap,
// //   PetItemContainer,
// //   PetItemSpeciesList,
// //   PetSpeciesDesc,
// //   PetSpeciesItem,
// // } from "./PetItem.styled";

import { useDispatch } from "react-redux";
import PetInfo from "./PetInfo";

// // const PetItem = ({ pet }) => {
// //   return (
// //     <PetItemContainer>
// //       <ItenImgWrap>
// //         <img src={petItem.img} alt="petImage" />
// //       </ItenImgWrap>
// //       <ItemDetailsWrap>
// //         <h2>{petItem.title}</h2>
// //         <PetItemSpeciesList>
// //           <PetSpeciesItem>
// //             Name
// //             <PetSpeciesDesc>{petItem.name}</PetSpeciesDesc>
// //           </PetSpeciesItem>
// //           <PetSpeciesItem>
// //             Birthday
// //             <PetSpeciesDesc>{petItem.birthday}</PetSpeciesDesc>
// //           </PetSpeciesItem>
// //           <PetSpeciesItem>
// //             Sex
// //             <PetSpeciesDesc>{petItem.sex}</PetSpeciesDesc>
// //           </PetSpeciesItem>
// //           <PetSpeciesItem>
// //             Species
// //             <PetSpeciesDesc>{petItem.species}</PetSpeciesDesc>
// //           </PetSpeciesItem>
// //         </PetItemSpeciesList>
// //       </ItemDetailsWrap>
// //     </PetItemContainer>

// //   );
// // };

// // export default PetItem;
// import React from "react";

// import sprite from "../../images/sprite.svg";
// import { useDispatch } from "react-redux";
// import { deletePet } from "../../redux/auth/authOperation";

// const PetItem = ({ pet }) => {
//   const dispatch = useDispatch();

//   const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + "...";
//     }
//     return text;
//   };

//   const onDeletePet = (petId) => {
//     dispatch(deletePet(petId));
//   };

//   return (
//     <li>
//       <img src={pet.imgURL} alt="Pet foto" />
//       <img src={pet.imgURL} alt="Pet foto" />

//       <div>
//         <h2>{truncateText(pet.title, 19)}</h2>

//         <div>
//           <div>
//             <h3>Name</h3>
//             <p>Dana</p>
//           </div>
//           <div>
//             <h3>Birthday</h3>
//             <p>{pet.birthday}2020-09-09</p>
//           </div>
//           <div>
//             <h3>Sex</h3>
//             <p>{pet.sex}Dana</p>
//           </div>
//           <div>
//             <h3>Species</h3>
//             <p>{pet.species}Dana</p>
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={() => {
//           onDeletePet(pet._id);
//         }}
//       >
//         <svg width="16" height="16">
//           <use xlinkHref={`${sprite}#trash`} />
//         </svg>
//       </button>
//     </li>
//   );
// };

// export default PetItem;
import icon from "../../images/sprite.svg";
import {
  DeleteBtn,
  ItemImg,
  ItenImgWrap,
  PetItemContainer,
  PetItemTitle,
  TrashIcon,
} from "./PetItem.styled";
import { removeMyPet } from "../../redux/auth/authOperation";

export const PetItem = ({ props }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeMyPet(props._id));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <PetItemContainer>
      <ItenImgWrap>
        <ItemImg component="img" src={props.imgURL} alt={props.title} />
      </ItenImgWrap>
      <div>
        <div>
          <PetItemTitle>{truncateText(props.title)}</PetItemTitle>
          <PetInfo props={props} hidden={true} addPet={true} />
        </div>

        <DeleteBtn type="button" onClick={handleClick}>
          <TrashIcon>
            <use href={`${icon}#icon-trash-2`} />
          </TrashIcon>
        </DeleteBtn>
      </div>
    </PetItemContainer>
  );
};
export default PetItem;
