import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {
  TYPES,
  FLIGHT_ID_LABEL,
  FLIGHT_ARRIVAL_LABEL,
  FLIGHT_DEPARTURE_LABEL,
  FLIGHT_DATE_LABEL,
  FLIGHT_TYPE_LABEL
} from 'constants/flight';

import styles from './FilterForm.css';

const types = [
  ...TYPES.map(t => ({ label: t.toUpperCase(), value: t })),
  { label: 'ALL', value: 'all' }
];

const renderTextField = ({ input, label }) => (
  <TextField label={label} fullWidth {...input} />
);

const renderSelectField = ({ input, label, items }) => (
  <TextField select label={label} {...input} fullWidth>
    {items.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

const renderDatePicker = ({ input, label }) => (
  <TextField
    label={label}
    type="date"
    InputLabelProps={{
      shrink: true
    }}
    fullWidth
    {...input}
  />
);

const FilterForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={2}>
          <Field
            name="id"
            component={renderTextField}
            label={FLIGHT_ID_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="departure"
            component={renderTextField}
            label={FLIGHT_DEPARTURE_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="arrival"
            component={renderTextField}
            label={FLIGHT_ARRIVAL_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="type"
            items={types}
            component={renderSelectField}
            label={FLIGHT_TYPE_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="date"
            label={FLIGHT_DATE_LABEL}
            component={renderDatePicker}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default reduxForm({ form: 'filter' })(FilterForm);
