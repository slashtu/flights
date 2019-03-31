import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from 'routes';
import Header from 'components/Header';
import { fetchFlights } from 'modules/flights';

import './normalize.css';
import './base.css';

@connect(
  null,
  { fetchFlights }
)
class App extends Component {
  componentDidMount() {
    this.props.fetchFlights(['cheap', 'business']);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Routes />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
