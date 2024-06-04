import styled from "styled-components";
import * as colors from "../../config/Colors";

export const Message = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${colors.textColorSecond};
  text-align: center;

  @media screen and (max-width: 425px){
    font-size: 24px;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;
