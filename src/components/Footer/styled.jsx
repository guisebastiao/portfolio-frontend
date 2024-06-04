import styled from "styled-components";
import * as colors from "../../config/Colors";

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.textColorSecond};
  text-align: center;
`;
