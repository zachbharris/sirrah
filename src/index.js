import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, StoreProvider } from "easy-peasy";

import App from './App';
import * as serviceWorker from './serviceWorker';
import model from "./model";

const store = createStore(model);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
