import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";
import { GlobalStyle, newTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [isSecondaryTheme, seIsSecondaryTheme] = useState(false);

  return (
    <ThemeProvider theme={isSecondaryTheme ? newTheme : defaultTheme}>
      <GlobalStyle />
      <div
        style={{
          backgroundColor: isSecondaryTheme ? "black" : "white",
        }}
      >
        App test
        <PrimaryButton onClick={() => seIsSecondaryTheme(!isSecondaryTheme)}>
          Toggle theme
        </PrimaryButton>
        <PrimaryButton
          onClick={() => seIsSecondaryTheme(!isSecondaryTheme)}
          modifiers="small"
        >
          Toggle theme
        </PrimaryButton>
        <PrimaryButton modifiers="warning">Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
