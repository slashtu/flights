import React from 'react';
import { mount } from 'enzyme';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '../TableHead';

const head = [
  { key: 'cheap', label: 'CHEAP' },
  { key: 'business', label: 'BUSINESS' }
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
});
