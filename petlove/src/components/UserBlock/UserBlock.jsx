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

import { useDispatch, useSelector } from "react-redux";
import {
  selectFullUserInfo,
  selectUserAvatar,
} from "../../redux/users/usersSelector";
import { setAvatar } from "../../redux/users/usersSlice";

const UserBlock = () => {
  const userInfo = useSelector(selectFullUserInfo);
  const useAvatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();

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
          <img src={useAvatar} alt="avatar" />
        </UserImg>
      ) : (
        <div>
          <UserImg>
            {" "}
            <img src={userImg} alt="User Avatar" />
          </UserImg>
          <UserUploadBtn onClick={triggerFileInput}>
            {" "}
            Upload photo
          </UserUploadBtn>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}

      <UserTitle>My information</UserTitle>
      <UserList>
        <UserItem> {userInfo.name}</UserItem>
        <UserItem>{userInfo.email}</UserItem>
        <UserItem>
          {userInfo.phone === "" ? "+380" : `${userInfo.phone}`}
        </UserItem>
      </UserList>
    </UserBlockContainer>
  );
};

export default UserBlock;
