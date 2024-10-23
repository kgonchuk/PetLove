import React from "react";
import {
  EditUserBtn,
  IconEdit,
  IconUser,
  UserCardSection,
  UserCardWrap,
  UserIconText,
  UserIconWrap,
  Wrap,
} from "./UserCard.styled";
import icon from "../../images/sprite.svg";
import UserBlock from "../UserBlock/UserBlock";

const UserCard = () => {
  return (
    <UserCardSection>
      <UserCardWrap>
        <UserIconWrap>
          User
          <IconUser>
            <use href={`${icon}#icon-user-02`} />
          </IconUser>
        </UserIconWrap>
        <EditUserBtn type="button">
          <IconEdit>
            {" "}
            <use href={`${icon}#icon-edit`} />
          </IconEdit>
        </EditUserBtn>
      </UserCardWrap>
      <UserBlock />
    </UserCardSection>
  );
};

export default UserCard;
