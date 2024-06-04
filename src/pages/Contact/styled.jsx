import styled from "styled-components";
import * as colors from "../../config/Colors";

export const FeatureContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
  gap: 70px;

  @media screen and (max-width: 960px) {
    margin-top: 120px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.textColorSecond};
  font-weight: 600;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.textColorFourth};
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxContact = styled.div`
  max-width: 500px;
  width: 100%;
  height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${colors.colorWhite};
  box-shadow: 1px 8px 10px 2px ${colors.firstShadowColor};
  border-radius: 20px;
  padding: 15px;
  gap: 20px;
`;

export const TitleBoxContent = styled.h3`
  font-size: 24px;
  color: ${colors.textColorFourth};
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & span {
    width: calc(100% - 18px);
    color: ${colors.textColorFourth};
    font-size: 16px;
    font-weight: 400;
    word-break: break-all;
  }

  & svg {
    color: ${colors.textColorFourth};
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    & span {
    font-size: 12px;
  }

  & svg {
    font-size: 14px;
  }
  }
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  min-height: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const FormInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid ${colors.borderColor};
  padding-left: 20px;
  width: 100%;
  height: 55px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.textColorSecond};
  background: transparent;

  &::placeholder {
    font-weight: 400;
  }

  @media screen and (max-width: 400px) {
    height: 36px;
    border: 1px solid ${colors.borderColor};
    font-size: 12px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  background: transparent;
  border: 2px solid ${colors.borderColor};
  border-radius: 10px;
  padding: 15px 20px;
  resize: none;
  color: ${colors.textColorSecond};
  font-weight: 500;
  font-size: 14px;

  @media screen and (max-width: 400px) {
    height: 200px;
    border: 1px solid ${colors.borderColor};
    font-size: 12px;
  }
`;

export const FormButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const ButtonSubmit = styled.button`
  max-width: 110px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.secondColor};
  transition: all 400ms;
  border-radius: 10px;
  gap: 5px;

  & span {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.colorWhite};

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }

  & svg {
    font-size: 18px;
    color: ${colors.colorWhite};

    @media screen and (max-width: 400px) {
      font-size: 15px;
    }
  }

  &:hover {
    background: ${colors.secondColorHover};
  }

  @media screen and (max-width: 400px) {
    max-width: 85px;
    height: 36px;
  }
`;
