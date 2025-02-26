import React, { useEffect, useState } from "react";
import {
  UserBtn,
  IconEdit,
  IconUser,
  Img,
  UserBlockContainer,
  UserCardSection,
  UserCardWrap,
  UserIconText,
  UserIconWrap,
  UserImg,
  UserItem,
  UserList,
  UserTitle,
  UserUploadBtn,
  Wrap,
} from "./UserCard.styled";

import icon from "../../images/sprite.svg";
import userImg from "../../images/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
  selectUserEmail,
} from "../../redux/auth/authSelector";
import { currentUser, currentUserFull } from "../../redux/auth/authOperation";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import ModalEditUser from "../ModalWindow/ModalEditUser/ModalEditUser";
import UserBlock from "../UserBlock/UserBlock";
import PetsBlock from "../PetsBlock/PetsBlock";
import { getFullUserInfo } from "../../redux/users/usersOperation";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const UserCard = () => {
  const data = useSelector(selectUser);

  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.email) dispatch(getFullUserInfo());
  }, [dispatch, data]);

  return (
    <>
      <UserCardSection>
        <EditUserBtn setOpenModal={() => setModalOpen(true)} />
        <UserBlock setOpenModal={() => setModalOpen(true)} />
        <PetsBlock />
        <LogOutBtn />
      </UserCardSection>

      <ModalEditUser
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        userData={data}
      />
    </>
  );
};

export default UserCard;
