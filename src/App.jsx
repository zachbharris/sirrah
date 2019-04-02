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
    font-size: 16px;
  }

  body { 
    margin: 0;
  }
`;
