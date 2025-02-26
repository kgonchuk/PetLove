import React, { useEffect, useState } from "react";
import {
  Img,
  UserBlockContainer,
  UserImg,
  UserInput,
  UserItem,
  UserList,
  UserTitle,
  UserUploadBtn,
} from "./UserBlock.styled";
import userImg from "../../images/user.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  selectFullUserInfo,
  selectUserData,
  selectUserName,
} from "../../redux/users/usersSelector";
import { setAvatar } from "../../redux/users/usersSlice";
import { selectUser } from "../../redux/auth/authSelector.js";
import { selectUserAvatar } from "../../redux/users/usersSelector.js";
import { getFullUserInfo } from "../../redux/auth/authOperation.js";

const UserBlock = () => {
  const user = useSelector(selectUser);
  const useAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFullUserInfo());
  }, [dispatch]);

  const handleFileChange = async (e) => {
    const { type, files } = e.target;

    if (type === "file") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          dispatch(setAvatar(fileReader.result));
        }
      };
      if (files[0]) {
        fileReader.readAsDataURL(files[0]);
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <UserBlockContainer>
      {useAvatar ? (
        <UserImg>
          <Img src={useAvatar} alt="User avatar" />
        </UserImg>
      ) : (
        <div>
          <UserImg>
            <Img src={userImg} alt="User Avatar" />
          </UserImg>
          <span>Upload photo</span>
        </div>
      )}

      <UserTitle>My information</UserTitle>
      <UserList>
        <UserItem>
          <UserInput value={` ${user.name || "Name"}`} />
        </UserItem>
        <UserItem>
          <UserInput value={`${user.email || "name@gmail.com"}`} />
        </UserItem>
        <UserItem>
          <UserInput value={` ${user.phone || "+380"}`} readOnly />
        </UserItem>
      </UserList>
    </UserBlockContainer>
  );
};

export default UserBlock;
