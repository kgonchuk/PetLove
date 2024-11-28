import React, { useState } from "react";
import {
  IconEdit,
  IconUser,
  UserBtn,
  UserCardWrap,
  UserIconWrap,
} from "./EditUserBtn.styled";
import icon from "../../images/sprite.svg";
import ModalEditUser from "../ModalWindow/ModalEditUser/ModalEditUser";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";

const EditUserBtn = ({ setOpenModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <UserCardWrap>
        <UserIconWrap>
          User
          <IconUser>
            <use href={`${icon}#icon-user-02`} />
          </IconUser>
        </UserIconWrap>
        <UserBtn type="button" onClick={setOpenModal}>
          <IconEdit>
            {" "}
            <use href={`${icon}#icon-edit`} />
          </IconEdit>
        </UserBtn>
        {/* {modalOpen && (
          <ModalEditUser onClose={() => setModalOpen(false)}  />
        )} */}
      </UserCardWrap>
    </>
  );
};

export default EditUserBtn;
