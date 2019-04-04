import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

// pages
import HomePage from './Home';

const Routes = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
