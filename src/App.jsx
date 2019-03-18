import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "styled-theming";

import Routes from "./routes";
import { white } from "./theme/colors";

const backgroundColor = theme("mode", {
  default: white
});

const App = () => {
  return (
    <ThemeProvider theme={{ mode: "default" }}>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </ThemeProvider>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: ${backgroundColor}
  }
`;
