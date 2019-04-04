import React from 'react';
import PropTypes from 'prop-types';
import { default as MUTable } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Table.css';

const Table = React.memo(props => {
  const { data, header, className, isLoading } = props;

  return (
    <Paper className={className}>
      {isLoading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : (
        <MUTable>
          <TableHead>
            <TableRow>
              {header.map(col => (
                <TableCell key={col}>{col.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
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
      )}
    </Paper>
  );
});

Table.propTypes = {
  data: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired
};

export default Table;
