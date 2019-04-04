import { createSelector } from 'reselect';

export const selectForm = state => state.form;

export const selectFilterForm = createSelector(
  selectForm,
  form => form.filter || {}
);

export const selectFilterCondition = createSelector(
  selectFilterForm,
  filterForm => filterForm.values || {}
);
