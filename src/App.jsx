import React, { Component, Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "styled-theming";

// import router for pages
import Router from "./pages/router";

const backgroundColor = theme("mode", {
  light: "#F4F5F1",
  dark: "#0B0B0A"
});

const fontColor = theme("mode", {
  light: "#0B0B0A",
  dark: "#F4F5F1"
});

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500');
  body {
    margin: 0;
    background: ${backgroundColor};
    color: ${fontColor};
    font-family: "Roboto", sans-serif;
  }
`;

class App extends Component {
  state = {
    mode: "dark"
  };
  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.mode }}>
        <Fragment>
          <Router />
          <GlobalStyles />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
