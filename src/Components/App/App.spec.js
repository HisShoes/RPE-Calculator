import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import RpeSetDisplay from '../SetDisplay/SetDisplay';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);  
  });

  it('Renders', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('Renders RPE Set Display', () => {
    expect(wrapper.containsMatchingElement(<RpeSetDisplay />)).toEqual(true);
  });
});