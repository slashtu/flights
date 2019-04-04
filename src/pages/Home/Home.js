import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectFlightsIsLoading,
  selectFilteredFlights
} from 'selectors/flights';

import FilterForm from './FilterForm';
import Table from 'components/Table';

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
        <Table
          className={styles.table}
          data={flights}
          isLoading={isLoading}
          header={[
            'id',
            'type',
            'departure',
            'arrival',
            'departureTime',
            'arrivalTime'
          ]}
        />
      </div>
    );
  }
}

export default Home;
