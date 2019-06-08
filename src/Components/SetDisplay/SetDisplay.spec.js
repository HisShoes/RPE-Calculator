import React from 'react';
import { shallow } from 'enzyme';
import SetDisplay from './SetDisplay';

describe('SetDisplay', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SetDisplay />));

  it('Renders a div', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

});