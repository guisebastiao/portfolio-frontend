import styled from "styled-components";
import * as colors from "../../config/Colors";

export const SocialIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  @media screen and (max-width: 1220px){
    justify-content: center;
  }

  @media screen and (max-width: 260px){
    gap: 15px;
  }
`;

export const Li = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 490px){
    width: 40px;
    height: 40px;
  }
`

export const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    font-size: 16px;
    color: ${colors.textColorSecond};
    transition: all 200ms;
  }

  &:hover svg {
    color: ${colors.secondColor};
  }
`;
