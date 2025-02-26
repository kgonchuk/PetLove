import PetItem from "../PetItem/PetItem";
import { useSelector } from "react-redux";
import { selectPets } from "../../redux/auth/authSelector";
import { PetsListContainer, PetsListWrap } from "./PetsList.styled";

export const PetsList = () => {
  const pets = useSelector(selectPets);

  return (
    <PetsListContainer>
      <PetsListWrap>
        {pets?.map((el) => (
          <li
            key={el._id}
            sx={{
              p: 0,
              mb: "24px",
            }}
          >
            <PetItem props={el} />
          </li>
        ))}
      </PetsListWrap>
    </PetsListContainer>
  );
};
export default PetsList;
