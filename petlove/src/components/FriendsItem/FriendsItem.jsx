import React from "react";
import {
  FreindsItemContainer,
  FreindsItemDescWrap,
  FriendsAdresss,
  FriendsEmail,
  FriendsImgWrap,
  FriendsItemDesc,
  FriendsItemList,
  FriendsItemListWrap,
  FriendsItemText,
  FriendsName,
  FriendsPhone,
  FriendsTime,
  FriendWorksWrap,
  FriensImg,
} from "./FriendsItem.styled";

const FriendsItem = ({ friendItem }) => {
  const { imageUrl, url, title, address, email, phone } = friendItem;

  const getWorkTime = friendItem.workDays?.find((day) => day.isOpen);
  return (
    <>
      <FreindsItemContainer>
        {" "}
        <FriendWorksWrap>
          {" "}
          {getWorkTime ? (
            <FriendsTime>
              {getWorkTime.from} - {getWorkTime.to}
            </FriendsTime>
          ) : (
            <FriendsTime>Day and night</FriendsTime>
          )}
        </FriendWorksWrap>
        <FreindsItemDescWrap>
          <FriendsImgWrap href={url} target="_blank" rel="noopener noreferrer">
            <FriensImg src={imageUrl} alt={""} />
          </FriendsImgWrap>
          <FriendsItemListWrap>
            <FriendsName>{title}</FriendsName>
            <FriendsItemList>
              <FriendsItemDesc>
                Email:
                <a href={email}>
                  <FriendsItemText>
                    {email ? email : "website only"}
                  </FriendsItemText>
                </a>
              </FriendsItemDesc>
              <FriendsItemDesc>
                Address:
                <a href={address}>
                  <FriendsItemText>
                    {address ? address : "website only"}
                  </FriendsItemText>
                </a>
              </FriendsItemDesc>
              <FriendsItemDesc>
                Phone:
                <a href={phone}>
                  <FriendsItemText>
                    {phone ? phone : "email only"}
                  </FriendsItemText>
                </a>
              </FriendsItemDesc>
            </FriendsItemList>
          </FriendsItemListWrap>
        </FreindsItemDescWrap>
      </FreindsItemContainer>
    </>
  );
};

export default FriendsItem;
