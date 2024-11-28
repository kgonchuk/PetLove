import React, { useEffect, useState } from "react";
import {
  UserBlockContainer,
  UserImg,
  UserItem,
  UserList,
  UserTitle,
  UserUploadBtn,
} from "./UserBlock.styled";
import userImg from "../../images/user.jpg";

import ModalEditUser from "../ModalWindow/ModalEditUser/ModalEditUser";

const UserBlock = ({ data, setOpenModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <UserBlockContainer>
      {data.avatar ? (
        <UserImg>
          <img src={data.avatar} alt="avatar" />
        </UserImg>
      ) : (
        <UserImg>
          {" "}
          <img src={userImg} alt="User Avatar" />
          <UserUploadBtn>Upload photo</UserUploadBtn>
        </UserImg>
      )}
      {/* <UserImg>
        {" "}
        <img src={data.avatar} alt="User Avatar" />
        <UserUploadBtn>Upload photo</UserUploadBtn>
      </UserImg> */}

      <UserTitle>My information</UserTitle>
      <UserList>
        <UserItem> {data.name ? data.name : "Name"}</UserItem>
        <UserItem>{data.email ? data.email : "Email"}</UserItem>
        <UserItem>{data.phone ? data.phone : "+380"}</UserItem>
      </UserList>
    </UserBlockContainer>
  );
};

export default UserBlock;
