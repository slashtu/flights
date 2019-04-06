import React from 'react';
import { mount } from 'enzyme';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import {
  ID_LABEL,
  ARRIVAL_LABEL,
  DEPARTURE_LABEL,
  DEPARTURE_TIME_LABEL,
  ARRIVAL_TIME_LABEL,
  TYPE_LABEL
} from 'constants/flight';

import Table from '../Table';

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
    const wrapper = mount(<Table data={flights} head={head} />);
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
});
