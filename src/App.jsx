import React, { useEffect } from 'react';
import { useActions, useStore } from "easy-peasy";

import Routes from "./routes";

const App = () => {
  const initialise = useActions(actions => actions.initialise);

  useEffect(() => {
    initialise()
  }, [initialise])

  return <Routes />
}

export default App;
