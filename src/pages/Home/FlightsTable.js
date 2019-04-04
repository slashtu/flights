import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as MUTable } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import sortBy from 'lodash/sortBy';

import FlightsTableHead from './FlightsTableHead';
import styles from './FlightsTable.css';

class FlightsTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  state = {
    order: 'asc',
    orderBy: 'type',
    page: 0,
    rowsPerPage: 20
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  sortData = data => {
    const { order, orderBy } = this.state;
    return order === 'asc'
      ? sortBy(data, [orderBy])
      : sortBy(data, [orderBy]).reverse();
  };

  render() {
    const { data } = this.props;
    const { page, rowsPerPage, order, orderBy } = this.state;

    const sortedData = this.sortData(data);

    return (
      <React.Fragment>
        <MUTable>
          <FlightsTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
          />
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow
                  key={row.id}
                  className={i % 2 ? styles.rowOdd : styles.rowEven}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.departure}</TableCell>
                  <TableCell>{row.arrival}</TableCell>
                  <TableCell>{row.departureTime}</TableCell>
                  <TableCell>{row.arrivalTime}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </MUTable>
        <TablePagination
          rowsPerPageOptions={[20, 50, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </React.Fragment>
    );
  }
}

export default FlightsTable;
