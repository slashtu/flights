import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {
  TYPES,
  ID_LABEL,
  ARRIVAL_LABEL,
  DEPARTURE_LABEL,
  DATE_LABEL,
  TYPE_LABEL,
  TYPE_ALL
} from 'constants/flight';

import styles from './FilterForm.css';

const types = [...TYPES, TYPE_ALL].map(t => ({
  label: t.toUpperCase(),
  value: t
}));

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
  const { handleSubmit } = props;
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={2}>
          <Field name="id" component={renderTextField} label={ID_LABEL} />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="departure"
            component={renderTextField}
            label={DEPARTURE_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="arrival"
            component={renderTextField}
            label={ARRIVAL_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field
            name="type"
            items={types}
            component={renderSelectField}
            label={TYPE_LABEL}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Field name="date" label={DATE_LABEL} component={renderDatePicker} />
        </Grid>
      </Grid>
    </form>
  );
};

FilterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'filter' })(FilterForm);
