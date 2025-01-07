import React, { useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelector";
import { currentUserFull } from "../redux/auth/authOperation";
import { ProfilePageWrap } from "./ProfilePage.styled";
import MyNotices from "../components/MyNotices/MyNotices";

const ProfilePage = () => {
  return (
    <ProfilePageWrap>
      <UserCard />
      <MyNotices />
    </ProfilePageWrap>
  );
};

export default ProfilePage;
