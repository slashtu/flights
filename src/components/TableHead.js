import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

class FlightsTableHead extends Component {
  static propTypes = {
    head: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ),
    order: PropTypes.string,
    orderBy: PropTypes.string.isRequired
  };

  static defaultProps = {
    head: [],
    order: 'asc'
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { head, order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {head.map(col => (
            <TableCell
              key={col.key}
              sortDirection={orderBy === col.key ? order : false}
            >
              <Tooltip title="Sort" placement="bottom-end" enterDelay={300}>
                <TableSortLabel
                  active={orderBy === col.key}
                  direction={order}
                  onClick={this.createSortHandler(col.key)}
                >
                  {col.label}
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
