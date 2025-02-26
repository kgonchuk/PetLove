import { useLocation } from "react-router-dom";
import { PetInfoText, PetInfoTitle, PetInfoWrap } from "./PetInfo.styled";

export const PetInfo = ({ props, hidden }) => {
  const location = useLocation();
  const profile = location.pathname === "/profile";

  const formatDateString = (dateString) => {
    if (dateString === undefined) {
      return;
    }
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    const parts = formattedDate.split("/");
    const dateWithDots = `${parts[0]}.${parts[1]}.${parts[2]}`;

    return dateWithDots;
  };
  return (
    <PetInfoWrap>
      <div>
        <PetInfoTitle>Name</PetInfoTitle>
        <PetInfoText>{props.name}</PetInfoText>
      </div>
      <div>
        <PetInfoTitle>Birthday</PetInfoTitle>
        <PetInfoText>{formatDateString(props.birthday)}</PetInfoText>
      </div>
      <div>
        <PetInfoTitle>Sex</PetInfoTitle>
        <PetInfoText>{props.sex}</PetInfoText>
      </div>
      <div>
        <PetInfoTitle>Species</PetInfoTitle>
        <PetInfoText>{props.species}</PetInfoText>
      </div>
    </PetInfoWrap>
  );
};
export default PetInfo;
