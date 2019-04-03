import React, { useEffect } from 'react';
import { useActions } from 'easy-peasy';
import { createGlobalStyle } from 'styled-components';

import Routes from './routes';
import { justWhite, soulBlack } from './theme/colors';

const App = () => {
  const initialise = useActions(actions => actions.initialise);

  useEffect(() => {
    initialise();
  }, [initialise]);

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

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
    position: relative;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;
