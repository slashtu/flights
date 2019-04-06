import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { requiredInput } from 'utils/validation';

import {
  TYPES,
  ARRIVAL_LABEL,
  DEPARTURE_LABEL,
  DEPARTURE_TIME_LABEL,
  ARRIVAL_TIME_LABEL,
  TYPE_LABEL
} from 'constants/flight';

const types = TYPES.map(t => ({ label: t.toUpperCase(), value: t }));

const renderTextField = ({ input, label, meta: { touched, error } }) => {
  const isError = touched && error;
  return (
    <TextField
      error={!!isError}
      label={isError ? `${label} ${error}` : label}
      fullWidth
      {...input}
    />
  );
};

const renderSelectField = ({
  input,
  label,
  items,
  meta: { touched, error }
}) => {
  const isError = touched && error;
  return (
    <TextField
      error={!!isError}
      label={isError ? `${label} ${error}` : label}
      select
      {...input}
      fullWidth
    >
      {items.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

const renderDatePicker = ({ input, label, meta: { touched, error } }) => {
  const isError = touched && error;
  return (
    <TextField
      error={!!isError}
      label={isError ? `${label} ${error}` : label}
      type="datetime-local"
      InputLabelProps={{
        shrink: true
      }}
      {...input}
      fullWidth
    />
  );
};

class FlightForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Flight Form
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Field
              name="departure"
              component={renderTextField}
              label={DEPARTURE_LABEL}
              validate={[requiredInput]}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="arrival"
              component={renderTextField}
              label={ARRIVAL_LABEL}
              validate={[requiredInput]}
            />
          </Grid>

          <Grid item xs={12}>
            <Field
              name="departureTime"
              label={DEPARTURE_TIME_LABEL}
              component={renderDatePicker}
              validate={[requiredInput]}
            />
          </Grid>

          <Grid item xs={12}>
            <Field
              name="arrivalTime"
              label={ARRIVAL_TIME_LABEL}
              component={renderDatePicker}
              validate={[requiredInput]}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field
              name="type"
              items={types}
              component={renderSelectField}
              label={TYPE_LABEL}
              validate={[requiredInput]}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              disabled={submitting}
            >
              CREATE
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default reduxForm({ form: 'flight' })(FlightForm);
