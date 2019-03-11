import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// import pages
import Home from "./Home";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;
