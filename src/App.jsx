import React, { Component, Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

// import router for pages
import Router from './pages/router';

const backgroundColor = theme("mode", {
  light: "#F4F5F1",
  dark: "#0B0B0A"
})

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${backgroundColor}
  }
`

class App extends Component {
  state = {
    mode: "light"
  }
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
