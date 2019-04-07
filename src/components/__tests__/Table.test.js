import React from 'react';
import { mount } from 'enzyme';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';

import {
  ID_LABEL,
  ARRIVAL_LABEL,
  DEPARTURE_LABEL,
  DEPARTURE_TIME_LABEL,
  ARRIVAL_TIME_LABEL,
  TYPE_LABEL
} from 'constants/flight';

import Table from '../Table';
import TableHead from '../TableHead';

const head = [
  { key: 'id', label: ID_LABEL },
  { key: 'type', label: TYPE_LABEL },
  { key: 'departure', label: DEPARTURE_LABEL },
  { key: 'arrival', label: ARRIVAL_LABEL },
  { key: 'departureTime', label: DEPARTURE_TIME_LABEL },
  { key: 'arrivalTime', label: ARRIVAL_TIME_LABEL }
];

const flights = [
  {
    id: '123',
    type: 'cheap',
    departure: 'Taipei',
    arrival: 'Singapore',
    departureTime: new Date('2019-04-01').toISOString(),
    arrivalTime: new Date('2019-04-02').toISOString()
  },
  {
    id: '321',
    type: 'business',
    departure: 'Taipei',
    arrival: 'Singapore',
    departureTime: new Date('2019-04-01').toISOString(),
    arrivalTime: new Date('2019-04-02').toISOString()
  }
];

describe('<Table />', () => {
  it('component snapshot [mount]', () => {
    const wrapper = mount(
      <Table data={flights} head={head} rowsPerPageOptions={[20, 50, 100]} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('length of table rows', () => {
    const wrapper = mount(<Table data={flights} head={head} />);
    expect(wrapper.find(TableRow)).toHaveLength(3);
  });

  it('length of fileds', () => {
    const wrapper = mount(<Table data={flights} head={head} />);
    expect(wrapper.find(TableBody).find(TableCell)).toHaveLength(12);
  });

  it('request type sort, validate the state', () => {
    const wrapper = mount(<Table data={flights} head={head} />);

    wrapper
      .find(TableHead)
      .find(TableCell)
      .findWhere(n => n.key() === 'type')
      .find(TableSortLabel)
      .simulate('click');

    expect(wrapper.state().order).toEqual('desc');
    expect(wrapper.state().orderBy).toEqual('type');
  });

  it('click next page button', () => {
    const wrapper = mount(
      <Table data={flights} head={head} rowsPerPageOptions={[1]} />
    );

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    expect(wrapper.state().page).toEqual(1);
  });
});
