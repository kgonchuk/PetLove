import React from "react";
import {
  DateWrap,
  ImgWrap,
  ItemContainer,
  ItemDate,
  ItemDescrip,
  ItemImg,
  ItemTopic,
  ReadMoreLink,
} from "./NewsItem.styled";

const NewsItem = ({ newItem }) => {
  const { imgUrl, title, text, date, url } = newItem;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <ItemContainer>
      <ImgWrap>
        {" "}
        <ItemImg src={imgUrl} alt={""} />
      </ImgWrap>

      <ItemTopic>{title}</ItemTopic>
      <ItemDescrip>{text}</ItemDescrip>

      <DateWrap>
        <ItemDate>{formatDate(date)}</ItemDate>
        <ReadMoreLink href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </ReadMoreLink>
      </DateWrap>
    </ItemContainer>
  );
};

export default NewsItem;
