import React from 'react';

import './SetOutputs.css'

const SetOutputs = (props) => {
  //if values aren't set render some default/no values to show
  if(!props.e1rm && !props.perMax) {
    return null;
  } else {
    return (
      <div className="fields">
        <div className="six wide field">
          <label className="read-only-label">e1RM</label>
          <p>{props.e1rm}</p>
        </div>

        <div className="six wide field">
          <label className="read-only-label">Set % of Max</label>
          <p>{props.perMax}</p>
        </div>
      </div>
    )
  }
}

export default SetOutputs;