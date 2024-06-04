import styled, { keyframes } from "styled-components";
import * as colors from "../../config/Colors";

export const FeatureText = styled.div`
  position: relative;
  margin-top: 70px;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1220px){
    width: 100%;
  }
`;

export const FeatureImage = styled.div`
  position: relative;
  margin-top: 70px;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1220px){
    width: 100%;
  }
`;

export const BoxTypedText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.textColorSecond};
  font-size: 40px;

  @media screen and (max-width: 1220px){
    justify-content: center;
    font-size: 30px;
  }

  @media screen and (max-width: 420px){
    font-size: 20px;
  }
`;

export const SpanTypedText = styled.span`
  text-align: left;
  font-weight: 500;
  margin-right: 10px;

  @media screen and (max-width: 420px){
    margin-right: 5px;
  }
`;

export const BoxParagraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`

export const Paragraph = styled.p`
  font-size: 15px;
  color: ${colors.textColorSecond};
  font-weight: 400;

  @media screen and (max-width: 1220px){
    text-align: center;
  }

  @media screen and (max-width: 420px){
    font-size: 12px;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
  gap: 20px;

  @media screen and (max-width: 490px){
    gap: 10px;
  }

  @media screen and (max-width: 1220px){
    justify-content: center;
  }
`;

export const imgFloat = keyframes`
  50%{
    transform: translateY(10px);
    border-radius: 45% 55% 45% 55%;
  }
`;

export const ImageProfile = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 55% 45% 55% 45%;
  overflow: hidden;
  aspect-ratio: 1;
  object-fit: cover;
  margin: auto 0;
  animation: ${imgFloat} 7s ease-in-out infinite;

  @media screen and (max-width: 1220px){
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 420px){
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 255px){
    width: 100px;
    height: 100px;
  }
`;
