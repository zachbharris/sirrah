import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

// import router for pages
import Router from './router';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: 'default' }}>
        <Fragment>
          <Router />
          <GlobalStyles />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
