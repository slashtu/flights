import React from 'react';
import { Switch, Route } from 'react-router';

import Home from 'pages/Home/Home';
import Flight from 'pages/Flight/Flight';
import NoMatch from 'pages/NoMatch/NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/flight" component={Flight} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;
