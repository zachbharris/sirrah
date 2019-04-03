import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import StatusBar from '../components/statusbar';

// pages
import HomePage from './Home';

const Routes = () => (
  <BrowserRouter>
    <>
      <StatusBar />
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
