import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import Paper from '@material-ui/core/Paper';

import { createCheapFlight, createBusinessFlight } from 'modules/flights';
import FlightForm from './FlightForm';

import styles from './Flight.css';

@withRouter
@connect(
  null,
  { createCheapFlight, createBusinessFlight }
)
class Flight extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    createCheapFlight: PropTypes.func.isRequired,
    createCheapFlight: PropTypes.func.isRequired
  };

  submit = values => {
    const { type, departureTime, arrivalTime } = values;

    const formatedDepartureTime = new Date(departureTime).toISOString();
    const formatedArrivalTime = new Date(arrivalTime).toISOString();

    const flight = {
      ...values,
      id: uuidv1(),
      departureTime: formatedDepartureTime,
      arrivalTime: formatedArrivalTime
    };

    if (type === 'cheap') {
      this.props.createCheapFlight(flight);
    } else if (type === 'business') {
      this.props.createBusinessFlight(flight);
    }

    this.props.history.push('/');
  };
  render() {
    return (
      <Paper className={styles.container}>
        <FlightForm onSubmit={this.submit} />
      </Paper>
    );
  }
}

export default Flight;
