import React from 'react';
import { connect } from 'react-redux';
import { currentSet } from '../../Actions';

import './SetDisplay.css';

const SetDisplay = (props) => {
  return (
    <div className="ui form">
      <div className="set-container">
        <div className="fields">
          <div className="eight wide field">
            <label>Weight</label>
            <div className="ui input">
              <input onBlur={(e) => props.currentSet({weight: parseInt(e.target.value)})} type="text" placeholder="Weight" />
            </div>
          </div>
          <div className="four wide field">
            <label>Reps</label>
            <div className="ui labeled input">
              <div className="ui label">
                X
            </div>
              <input onBlur={(e) => props.currentSet({reps: parseInt(e.target.value)})} type="text" placeholder="Reps" />
            </div>
          </div>
          <div className="four wide field">
            <label>RPE</label>
            <div className="ui labeled input">
              <div className="ui label">
                @
            </div>
              <input onBlur={(e) => props.currentSet({rpe: parseInt(e.target.value)})} type="text" placeholder="RPE" />
            </div>
          </div>
        </div>
        <div className="fields">
          <div className="six wide field">
            <label className="read-only-label">e1RM</label>
            <p>{props.set.max}</p>
          </div>

          <div className="six wide field">
            <label className="read-only-label">Set % of Max</label>
            <p>{props.set.setPercentOfMax}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { set: state.currentSet }
}

export default connect(mapStateToProps, { currentSet })(SetDisplay);