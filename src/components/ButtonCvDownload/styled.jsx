import styled from "styled-components";
import * as colors from "../../config/Colors";

export const Form = styled.form`
  max-width: 180px;
  min-width: 80px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 490px){
    height: 38px;
  }

  @media screen and (max-width: 375px){
    height: 32px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  color: ${colors.textColorSecond};
  background: ${colors.buttonCvColor};
  transition: all 400ms;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: ${colors.secondColor};
    color: ${colors.colorWhite};
  }

  @media screen and (max-width: 490px){
    font-size: 12px;
  }

  @media screen and (max-width: 375px){
    font-size: 10px;
  }
`;
