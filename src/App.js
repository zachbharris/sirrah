import React from 'react';
import { createGlobalStyle } from "styled-components";

import Routes from "./routes";

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App;
