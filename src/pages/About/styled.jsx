import styled, { keyframes } from "styled-components";
import * as colors from "../../config/Colors";

export const FeatureIntroduction = styled.div`
  position: relative;
  margin-top: 70px;
  width: 50%;
  height: 100dvh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  gap: 50px;

  @media screen and (max-width: 1220px){
    margin-top: 0;
    width: 100%;
    height: 50%;
    margin-top: 70px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  text-transform: capitalize;
  color: ${colors.textColorSecond};
  font-weight: 700;
  text-align: center;
`;

export const AboutBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1220px){
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  font-size: 15px;
  color: ${colors.textColorFourth};
  text-align: left;

  @media screen and (max-width: 1220px){
    text-align: center;
  }

  @media screen and (max-width: 600px){
    font-size: 12px;
  }
`;

export const FeatureSkills = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1220px){
    align-items: center;
  }
`;

export const BoxSkills = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 1220px){
    justify-content: center;
  }
`;

export const Skill = styled.div`
  max-width: 90px;
  width: 100%;
  height: 110px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${colors.colorWhite};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  gap: 10px;

  & svg {
    font-size: 32px;
    color: ${colors.textColorSecond};
  }

  @media screen and (max-width: 600px){
    max-width: 60px;
    width: 100%;
    height: 80px;

    & svg {
    font-size: 24px;
    }
  }
`;

export const NameSkill = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.textColorSecond};

  @media screen and (max-width: 600px){
    font-size: 11px;
  }
`;

export const imgFloat = keyframes`
  50%{
    transform: translateY(10px);
    border-radius: 45% 55% 45% 55%;
  }
`;

export const FeatureImage = styled.div`
  position: relative;
  margin-top: 70px;
  width: 50%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  gap: 50px;

  @media screen and (max-width: 1220px){
    width: 100%;
    height: 50%;
  }
`;

export const Image = styled.img`
  width: 380px;
  border-radius: 55% 45% 55% 45%;
  overflow: hidden;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
  animation: ${imgFloat} 7s ease-in-out infinite;

  @media screen and (max-width: 1090px){
    width: 240px;
  }

  @media screen and (max-width: 450px){
    width: 150px;
  }
`;
