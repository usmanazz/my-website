import React from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  CardContainer,
  CardLinks,
  Icon,
  Link,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardDate,
  CardInfo,
  CardInfoContainer,
  CardImgWrapper,
} from "./CardStyles";

const Card = ({ title, position, year, link, image, altText, description }) => {
  return (
    <CardContainer>
      <CardLinks>
        <Icon>
          <Link href={link} target="_blank">
            <FiExternalLink />
          </Link>
        </Icon>
      </CardLinks>
      <CardImgWrapper>
        <CardImg src={image} alt={altText} />
      </CardImgWrapper>
      <CardInfoContainer>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{position}</CardSubtitle>
        <CardDate>{year}</CardDate>
        <CardInfo>{description}</CardInfo>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default Card;
