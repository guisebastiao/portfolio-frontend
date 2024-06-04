import styled, { keyframes } from "styled-components";
import * as colors from "../../config/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animation = keyframes`
  20%{background-position:0% 0%, 50% 50%, 100% 50%}
  40%{background-position:0% 100%, 50% 0%, 100% 50%}
  60%{background-position:0% 50%, 50% 100%, 100% 0%}
  80%{background-position:0% 50%, 50% 50%, 100% 100%}
`;

export const Loader = styled.div`
  max-width: 60px;
  width: 100%;
  aspect-ratio: 2;
  --bg: no-repeat radial-gradient(circle closest-side, ${colors.firstColor} 90%,#0000);
  background: var(--bg) 0%   50%, var(--bg) 50%  50%, var(--bg) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: ${animation} 1s infinite linear;
`;
