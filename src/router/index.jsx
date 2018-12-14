import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import pages
import { Home, NotFound } from '../pages'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router