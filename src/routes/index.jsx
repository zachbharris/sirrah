import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import HomePage from "./Home";
import NotFound from "./NotFound";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes;