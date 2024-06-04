import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as colors from "../config/Colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    font-family: "Poppins", sans-serif;
  }

  body {
    height: 100dvh;
    background: ${colors.bodyColor};
  }

  ::-webkit-scrollbar{
    width: 10px;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-track{
    background: ${colors.colorScrollPrimary};
  }
  ::-webkit-scrollbar-thumb{
    background: ${colors.colorScrollSecond};
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: ${colors.colorScrollThird};
  }

  button {
    cursor: pointer;
    background: transparent;
  }
`;

const AnimationOpacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${AnimationOpacity} 600ms;
  padding: 0 120px;

  @media screen and (max-width: 1220px) {
    flex-direction: column;
    padding: 0 60px;
  }

  @media screen and (max-width: 490px) {
    padding: 0 20px;
  }
`;
