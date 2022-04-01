import styled from "styled-components";
import { defaultTheme, newTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    padding: 6px;
    font-size: ${typeScale.copyrightText};
  `,

  large: () => `
    font-size: ${typeScale.h5}
  `,

  warning: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted}
  `,
};
// Creating base styles that will be shared among other buttons
const Button = styled.button`
  border-radius: 2px;
  padding: 10px;
  font-family: "Palette Mosaic", cursive;
  font-size: 16px;
  min-width: 100px;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.3s linear opacity, color 0.3s linear,
    background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    box-shadow: none;
    outline: 2px solid ${(props) => props.theme.secondaryColor};
  }

  &:active {
    box-shadow: none;
    outline: 2px solid ${(props) => props.theme.secondaryColor};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  opacity: 1;

  &:disabled {
    background-color: ${(props) => props.theme.disabledColor};
    color: ${(props) => props.theme.textColorOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(
    BUTTON_MODIFIERS
  )}// we want it to be last as we do not want the modifiers to be overwritten by anything else
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: white;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColorOnHover};
  }

  &:focus {
    box-shadow: none;
    outline: 2px solid ${(props) => props.theme.secondaryColorOnHover};
    background-color: ${(props) => props.theme.secondaryColorOnHover};
  }

  &:active {
    box-shadow: none;
    outline: 2px solid ${(props) => props.theme.secondaryColor};
  }

  &:disabled {
    background-color: ${(props) => props.theme.disabledColor};
    color: ${(props) => props.theme.textColorOnDisabled};
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background-color: none;
    color: ${(props) => props.theme.disabledColor};
    border-color: ${(props) => props.theme.disabledColor};
    cursor: not-allowed;
  }
`;
