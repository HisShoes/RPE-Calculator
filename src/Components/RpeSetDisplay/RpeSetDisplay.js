import React from 'react';

import SetInputs from '../SetInputs/SetInputs';
import SetOutputs from '../SetOutputs/SetOutputs';

import './RpeSetDisplay.css';

const RpeSetDisplay = () => (
  <div className="ui form">
    <div className="set-container">
      <SetInputs />
      <SetOutputs perMax="75%" e1rm="145kg"/>
    </div>
  </div>
)

export default RpeSetDisplay;