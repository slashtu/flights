import React from 'react';
import { Switch, Route } from 'react-router';

import Home from 'pages/Home/Home';
import FlightForm from 'pages/FlightForm/FlightForm';
import NoMatch from 'pages/NoMatch/NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/flight-form" component={FlightForm} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;
