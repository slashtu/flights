import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

import {
  FLIGHT_ID_LABEL,
  FLIGHT_ARRIVAL_LABEL,
  FLIGHT_DEPARTURE_LABEL,
  FLIGHT_DEPARTURE_TIME_LABEL,
  FLIGHT_ARRIVAL_TIME_LABEL,
  FLIGHT_TYPE_LABEL
} from 'constants/flight';

const rows = [
  { id: 'id', label: FLIGHT_ID_LABEL },
  { id: 'type', label: FLIGHT_TYPE_LABEL },
  { id: 'departure', label: FLIGHT_DEPARTURE_LABEL },
  { id: 'arrival', label: FLIGHT_ARRIVAL_LABEL },
  { id: 'departureTime', label: FLIGHT_DEPARTURE_TIME_LABEL },
  { id: 'arrivalTime', label: FLIGHT_ARRIVAL_TIME_LABEL }
];

class FlightsTableHead extends Component {
  static propTypes = {
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              key={row.id}
              sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip title="Sort" placement="bottom-end" enterDelay={300}>
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

export default FlightsTableHead;
