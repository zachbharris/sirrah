import React, { useEffect } from 'react';
import { useActions, useStore } from "easy-peasy";

import Routes from "./routes";

const App = () => {
  const initialise = useActions(actions => actions.initialise);
  const loading = useStore(state => state.loading)

  useEffect(() => {
    initialise()
  }, [initialise])

  if (loading) return <p>Loading...</p>
  return <Routes />
}

export default App;
