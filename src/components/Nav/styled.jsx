import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import * as colors from "../../config/Colors";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  background: ${colors.bodyColor};
  transition: all 400ms;
  z-index: 1000;
`;

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px){
    display: ${props => props.display};
    flex-direction: column;
    height: 40dvh;
  }
`;

export const Li = styled.li`
  height: 100%;
`;

const animationOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LinkNav = styled(NavLink)`
  position: relative;
  padding: 0 35px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  color: ${colors.textColorSecond};
  font-weight: 500;

  &.active {
    color: ${colors.firstColor};
    transition: color 600ms;
  }

  &.active::before {
    content: "";
    position: absolute;
    bottom: 15px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.firstColor};
    animation: ${animationOpacity} 1000ms;
  }
`;

export const NavLogo = styled.div`
  max-width: 180px;
  width: 100%;
  position: relative;
`;

export const MenuToggle = styled.div`
  position: fixed;
  top: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  cursor: pointer;
  display: none;
  z-index: 1000;

  @media screen and (max-width: 480px) {
    display: flex;
  }

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 2px;
    background: ${colors.textColorSecond};
    transition: all 400ms;
    transform: translateY(0px);
    box-shadow: 0 10px 0 ${colors.textColorSecond};
  }

  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 2px;
    background: ${colors.textColorSecond};
    transition: all 400ms;
    transform: translateY(5px);
  }

  &.active::before {
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 0 ${colors.textColorSecond};
  }

  &.active::after {
    transform: translateY(0px) rotate(-45deg);
    box-shadow: 0 0 0 ${colors.textColorSecond};
  }
`;
