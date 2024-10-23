import React from "react";
import {
  Img,
  UserBlockContainer,
  UserImg,
  UserItem,
  UserList,
  UserTitle,
  UserUploadBtn,
} from "./UserBlock.styled";
import userImg from "../../images/user.jpg";

const UserBlock = () => {
  return (
    <UserBlockContainer>
      <UserImg>
        <Img src={userImg} />
      </UserImg>
      <UserUploadBtn type="button">Upload photo</UserUploadBtn>
      <UserTitle>My information</UserTitle>
      <UserList>
        <UserItem>
          <p>Anna</p>
        </UserItem>
        <UserItem>
          <p>anna00@gmail.com|</p>
        </UserItem>
        <UserItem>
          <p>+380</p>
        </UserItem>
      </UserList>
    </UserBlockContainer>
  );
};

export default UserBlock;
