import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import HomePage from "./Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={HomePage} />
    </Switch>
  </BrowserRouter>
)

export default Routes;