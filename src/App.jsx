import React, { useEffect } from 'react';
import { useActions, useStore } from "easy-peasy";
import { createGlobalStyle } from "styled-components"

import Routes from "./routes";
import { justWhite, soulBlack } from "./theme/colors";

const App = () => {
  const initialise = useActions(actions => actions.initialise);
  const loading = useStore(state => state.loading)

  useEffect(() => {
    initialise()
  }, [initialise])
  
  return (
    <>
      <GlobalStyles />
      {loading ? <p>Loading...</p> : <Routes />}
    </>
  )
}

export default App;

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${soulBlack};
    color: ${justWhite};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
  }

  body { 
    margin: 0;
  }
`;
