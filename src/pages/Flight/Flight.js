import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import Paper from '@material-ui/core/Paper';

import { createCheapFlight, createBusinessFlight } from 'modules/flights';
import FlightForm from './FlightForm';

import styles from './Flight.css';

@connect(
  null,
  { createCheapFlight, createBusinessFlight }
)
class Flight extends Component {
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
