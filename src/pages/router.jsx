import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import global components
import Navbar from "../components/Navbar";

// import pages
import { Home, NotFound } from ".";

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
