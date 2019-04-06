import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as MUTable } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import TableHead from 'components/TableHead';

class FlightsTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    classes: PropTypes.object,
    sort: PropTypes.func,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    head: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    classes: {},
    head: [],
    sort: ({ data }) => data,
    rowsPerPageOptions: [20, 50]
  };

  state = {
    order: 'asc',
    orderBy: 'type',
    page: 0,
    rowsPerPageSelected: 0
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
    const rowsPerPageSelected = this.props.rowsPerPageOptions.findIndex(
      e => e === event.target.value
    );
    this.setState({ rowsPerPageSelected });
  };

  render() {
    const { data, head, sort, classes, rowsPerPageOptions } = this.props;
    const { page, rowsPerPageSelected, order, orderBy } = this.state;

    const rowsPerPage = rowsPerPageOptions[rowsPerPageSelected];
    const sortedData = sort({ data, order, orderBy });

    return (
      <React.Fragment>
        <MUTable>
          <TableHead
            head={head}
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
                  className={i % 2 ? classes.rowOdd : classes.rowEven}
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
          rowsPerPageOptions={rowsPerPageOptions}
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
