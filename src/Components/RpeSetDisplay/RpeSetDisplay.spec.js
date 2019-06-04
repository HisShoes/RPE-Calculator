import React from 'react';
import { shallow } from 'enzyme';
import RpeSetDisplay from './RpeSetDisplay';

import SetInputs from '../SetInputs/SetInputs';
import SetOutputs from '../SetOutputs/SetOutputs';

describe('RPESetDisplay', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<RpeSetDisplay />));

  it('Renders a div', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('Renders input and output', () => {
    expect(wrapper.containsAllMatchingElements([
      <SetInputs />,
      <SetOutputs />
    ])).toEqual(true);
  });

});