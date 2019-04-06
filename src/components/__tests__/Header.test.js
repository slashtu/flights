import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';

describe('<Header />', () => {
  test.only('component snapshot [mount]', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
