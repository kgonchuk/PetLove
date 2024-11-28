import React, { useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelector";
import { currentUserFull } from "../redux/auth/authOperation";

const ProfilePage = () => {
  return <UserCard />;
};

export default ProfilePage;
