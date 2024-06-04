import styled from "styled-components";
import * as colors from "../../config/Colors";

export const FeatureProjects = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 50px;
  gap: 30px;

  @media screen and (max-width: 860px){
    padding: 20px 10px;
  }
`;

export const Project = styled.a`
  position: relative;
  max-width: 250px;
  min-height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 8px 10px 2px ${colors.firstShadowColor};
  background: ${colors.colorWhite};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  padding: 15px;
  z-index: 10;

  & svg {
    font-size: 50px;
    color: ${colors.secondColor};
    margin-bottom: 30px;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 100%;
    background: ${colors.secondColor};
    transition: all 400ms;
    z-index: 1;
  }

  &:hover::after {
    bottom: 0;
  }

  &:hover > * {
    transition-delay: 80ms;
    color: ${colors.colorWhite};
  }
`;

export const ProjectName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.textColorSecond};
  text-align: center;
  z-index: 2;
`;

export const ProjectDescription = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textColorFourth};
  text-align: center;
  z-index: 2;
`;
