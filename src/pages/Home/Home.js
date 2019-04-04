import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  selectFlightsIsLoading,
  selectFilteredFlights
} from 'selectors/flights';

import FilterForm from './FilterForm';
import FlightsTable from './FlightsTable';

import styles from './Home.css';

const mapStateToProps = state => {
  const flights = selectFilteredFlights(state);
  const isLoading = selectFlightsIsLoading(state);
  return { flights, isLoading };
};

@connect(mapStateToProps)
class Home extends Component {
  static propTypes = {
    flights: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  submit = values => {};

  render() {
    const { flights, isLoading } = this.props;

    return (
      <div>
        <FilterForm onSubmit={this.submit} />
        <Paper>
          {isLoading ? (
            <div className={styles.loading}>
              <CircularProgress />
            </div>
          ) : (
            <FlightsTable data={flights} />
          )}
        </Paper>
      </div>
    );
  }
}

export default Home;
