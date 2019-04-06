import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import sortBy from 'lodash/sortBy';

import {
  selectFlightsIsLoading,
  selectFilteredFlights
} from 'selectors/flights';

import Table from 'components/Table';
import FilterForm from './FilterForm';

import styles from './Home.css';

const tableStyles = {
  rowEven: {
    background: '#edf4ff'
  }
};

import {
  ID_LABEL,
  ARRIVAL_LABEL,
  DEPARTURE_LABEL,
  DEPARTURE_TIME_LABEL,
  ARRIVAL_TIME_LABEL,
  TYPE_LABEL
} from 'constants/flight';

const head = [
  { key: 'id', label: ID_LABEL },
  { key: 'type', label: TYPE_LABEL },
  { key: 'departure', label: DEPARTURE_LABEL },
  { key: 'arrival', label: ARRIVAL_LABEL },
  { key: 'departureTime', label: DEPARTURE_TIME_LABEL },
  { key: 'arrivalTime', label: ARRIVAL_TIME_LABEL }
];

const FlightsTable = withStyles(tableStyles)(Table);

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

  sort = ({ data, order, orderBy }) => {
    return order === 'asc'
      ? sortBy(data, [orderBy])
      : sortBy(data, [orderBy]).reverse();
  };

  render() {
    const { flights, isLoading } = this.props;

    return (
      <div>
        <FilterForm />
        <Paper>
          {isLoading ? (
            <div className={styles.loading}>
              <CircularProgress />
            </div>
          ) : (
            <FlightsTable
              data={flights}
              sort={this.sort}
              rowsPerPageOptions={[20, 50, 100]}
              head={head}
            />
          )}
        </Paper>
      </div>
    );
  }
}

export default Home;
