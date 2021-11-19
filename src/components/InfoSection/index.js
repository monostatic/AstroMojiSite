import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Body,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  img,
  id,
  primary,
  darkText,
}) => {
  console.log(primary);
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Body darkText={darkText}>{description}</Body>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} width="100%" class="img-responsive"/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
