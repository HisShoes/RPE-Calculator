import React from 'react';
import { shallow } from 'enzyme';
import RpeSetDisplay from './RpeSetDisplay';

describe('RPESetDisplay', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<RpeSetDisplay />));

  it('Renders a div', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

});