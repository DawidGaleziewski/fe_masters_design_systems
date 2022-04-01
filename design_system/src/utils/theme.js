import { blue, neutral, red, yellow, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  disabledColor: neutral[400],
  textColorOnDisabled: neutral[100],
  primaryColor: red[300],
  primaryColorHover: red[100],
  secondaryColor: blue[300],
  secondaryColorOnHover: blue[100],
  textColorOnPrimary: neutral[100],
  textColorOnBackground: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const newTheme = {
  disabledColor: neutral[100],
  textColorOnDisabled: neutral[100],
  primaryColor: blue[300],
  primaryColorHover: blue[300],
  secondaryColor: yellow[100],
  secondaryColorOnHover: blue[100],
  textColorOnPrimary: neutral[100],
  textColorOnBackground: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
