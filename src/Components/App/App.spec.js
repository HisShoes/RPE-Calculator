import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);  
  });

  it('Renders something', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });
});