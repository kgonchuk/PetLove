import React from "react";
import { useSelector } from "react-redux";
import {
  selectPets,
  selectUserNoticesViewed,
  selectUserPets,
} from "../../redux/auth/authSelector";
import { ListItem, PetsListContainer } from "./PetsList.styled";
import PetItem from "../PetItem/PetItem";

const PetsList = () => {
  const pets = useSelector(selectUserPets);
  return (
    // <>
    //   <PetsListContainer>
    //     {pets?.map((el) => (
    //       <ListItem key={el._id}>
    //         <PetItem petItem={el} />
    //       </ListItem>
    //     ))}
    //   </PetsListContainer>
    // </>
    <div>
      <ul>
        {pets?.map((petItem) => (
          <PetItem key={petItem._id} pet={petItem} />
        ))}
      </ul>
    </div>
  );
};

export default PetsList;
