import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectFormatedFlights } from 'selectors/flights';

import Search from './Search';
import DataTable from 'components/DataTable';

import styles from './Home.css';

const mapStateToProps = state => {
  const flights = selectFormatedFlights(state);
  return { flights };
};

@connect(mapStateToProps)
class Home extends Component {
  static propTypes = {
    flights: PropTypes.array.isRequired
  };

  state = {
    conditions: {}
  };

  getFlights = (flights, coniditions) => {
    return flights;
  };

  render() {
    const { conditions } = this.state;
    const { flights } = this.props;

    const filteredFlights = this.getFlights(flights, conditions);
    return (
      <div>
        <Search />
        <DataTable
          className={styles.table}
          data={filteredFlights}
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
