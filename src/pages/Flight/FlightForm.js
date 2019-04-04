import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import {
  TYPES,
  FLIGHT_ARRIVAL_LABEL,
  FLIGHT_DEPARTURE_LABEL,
  FLIGHT_DEPARTURE_TIME_LABEL,
  FLIGHT_ARRIVAL_TIME_LABEL,
  FLIGHT_TYPE_LABEL
} from 'constants/flight';

const types = TYPES.map(t => ({ label: t.toUpperCase(), value: t }));

const renderTextField = ({ input, label, meta: { touched, error } }) => {
  const isError = touched && error;

  return isError ? (
    <TextField error label={`${label} ${error}`} fullWidth {...input} />
  ) : (
    <TextField label={label} fullWidth {...input} />
  );
};

const renderSelectField = ({
  input,
  label,
  items,
  meta: { touched, error }
}) => {
  const isError = touched && error;
  return isError ? (
    <TextField error select label={`${label} ${error}`} {...input} fullWidth>
      {items.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  ) : (
    <TextField select label={label} {...input} fullWidth>
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
  return isError ? (
    <TextField
      error
      label={`${label} ${error}`}
      type="datetime-local"
      InputLabelProps={{
        shrink: true
      }}
      {...input}
      fullWidth
    />
  ) : (
    <TextField
      label={label}
      type="datetime-local"
      InputLabelProps={{
        shrink: true
      }}
      fullWidth
      {...input}
    />
  );
};

const required = value => {
  return value ? undefined : '[Required]';
};

const FlightForm = props => {
  const { handleSubmit, submitting } = props;
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
            label={FLIGHT_DEPARTURE_LABEL}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="arrival"
            component={renderTextField}
            label={FLIGHT_ARRIVAL_LABEL}
            validate={[required]}
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            name="departureTime"
            label={FLIGHT_DEPARTURE_TIME_LABEL}
            component={renderDatePicker}
            validate={[required]}
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            name="arrivalTime"
            label={FLIGHT_ARRIVAL_TIME_LABEL}
            component={renderDatePicker}
            validate={[required]}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Field
            name="type"
            items={types}
            component={renderSelectField}
            label={FLIGHT_TYPE_LABEL}
            validate={[required]}
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
};

export default reduxForm({ form: 'flight' })(FlightForm);
