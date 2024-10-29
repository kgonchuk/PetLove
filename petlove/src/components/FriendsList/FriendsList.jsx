import React, { useEffect } from "react";
import Title from "../Title/Title";
import { FriendsListContainer } from "./FriendsList.styled";
import FriendsItem from "../FriendsItem/FriendsItem";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFriends } from "../../redux/friends/friendsSelector";
import { getAllFriends } from "../../redux/friends/friends-operation";

const FriendsList = () => {
  const dispatch = useDispatch();
  const allFriends = useSelector(selectAllFriends);

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <>
      {" "}
      <Title>Our Friends</Title>
      <FriendsListContainer>
        {allFriends.map((friend) => (
          <FriendsItem key={friend._id} friendItem={friend} />
        ))}
      </FriendsListContainer>
    </>
  );
};

export default FriendsList;
