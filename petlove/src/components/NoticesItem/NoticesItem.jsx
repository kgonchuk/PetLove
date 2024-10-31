import React from "react";
import {
  LearnMoreBtn,
  LikeBtn,
  LikeIcon,
  NoticesContainer,
  NoticesFooter,
  NoticesInfoItem,
  NoticesInfoItemDesc,
  NoticesInfoList,
  NoticessImg,
  NoticessImgWrap,
  NoticesTitle,
  NoticesWrapTitle,
  StarSvg,
  StarWrap,
} from "./NoticesItem.styled";
import icon from "../../images/sprite.svg";

const NoticesItem = ({ noticeInfo, favorite }) => {
  const {
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
  } = noticeInfo;
  return (
    <NoticesContainer>
      <NoticessImgWrap>
        <NoticessImg src={imgURL} alt="Animal foto" />
      </NoticessImgWrap>

      <NoticesWrapTitle>
        <NoticesTitle>{title}</NoticesTitle>
        <StarWrap>
          <StarSvg>
            <use href={`${icon}#star`} />
          </StarSvg>
          {popularity}
        </StarWrap>
      </NoticesWrapTitle>

      <NoticesInfoList>
        <NoticesInfoItem>
          Name
          <NoticesInfoItemDesc>{name}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Birthday
          <NoticesInfoItemDesc>{birthday}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Sex
          <NoticesInfoItemDesc>{sex}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Species
          <NoticesInfoItemDesc>{species}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Category
          <NoticesInfoItemDesc>{category}</NoticesInfoItemDesc>
        </NoticesInfoItem>
      </NoticesInfoList>
      <NoticesInfoItemDesc>{comment}</NoticesInfoItemDesc>
      <NoticesFooter>
        <LearnMoreBtn>Learn More</LearnMoreBtn>
        <LikeBtn>
          <LikeIcon>
            <use href={`${icon}#favorite-heart`} />
          </LikeIcon>
        </LikeBtn>
      </NoticesFooter>
    </NoticesContainer>
  );
};

export default NoticesItem;
