import React from 'react';
import { mount } from 'enzyme';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '../TableHead';

import { ID_LABEL, TYPE_LABEL } from 'constants/flight';

const head = [
  { key: 'id', label: ID_LABEL },
  { key: 'type', label: TYPE_LABEL }
];

describe('<TableHead />', () => {
  it('component snapshot [mount]', () => {
    const wrapper = mount(
      <table>
        <TableHead orderBy="type" head={head} />
      </table>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('length of head', () => {
    const wrapper = mount(
      <table>
        <TableHead orderBy="type" head={head} />
      </table>
    );
    expect(wrapper.find(TableCell)).toHaveLength(2);
  });

  it('request sort, call the function #onRequestSort', () => {
    const mockCallBack = jest.fn((event, property) => property);

    const wrapper = mount(
      <table>
        <TableHead orderBy="type" head={head} onRequestSort={mockCallBack} />
      </table>
    );

    wrapper
      .find(TableCell)
      .findWhere(n => n.key() === 'type')
      .find(TableSortLabel)
      .simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack.mock.results[0].value).toBe('type');
  });
});
