import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import FilterForm from '../FilterForm';

const mockStore = configureMockStore();

describe('<FilterForm />', () => {
  it('Component snapshot [shallow]', () => {
    const store = mockStore({});
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <FilterForm />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
