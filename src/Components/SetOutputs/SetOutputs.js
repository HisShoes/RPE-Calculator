import React from 'react';

const SetOutputs = (props) => {
  //if values aren't set render some default/no values to show
  if(!props.e1rm && !props.perMax) {
    return null;
  } else {
    return (
      <div className="fields">
        <div className="six wide field">
          <label>e1RM</label>
          <input readonly="" defaultValue={props.e1rm} type="text" />
        </div>

        <div className="six wide field">
          <label>Set % of Max</label>
          <input readonly="" defaultValue={props.perMax} type="text" />
        </div>
      </div>
    )
  }
}

export default SetOutputs;