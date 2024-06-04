import styled from "styled-components";
import * as colors from "../../config/Colors";

export const BtnHire = styled.a`
  max-width: 180px;
  min-width: 80px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.firstColor};
  color: ${colors.colorWhite};
  font-size: 15px;
  font-weight: 400;
  border-radius: 10px;

  @media screen and (max-width: 490px){
    font-size: 12px;
    height: 38px;
  }

  @media screen and (max-width: 375px){
    font-size: 10px;
    height: 32px;
  }
`;
