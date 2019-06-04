import React from 'react'

const SetInput = () => {
  return (
    <div className="fields">
      <div className="eight wide field">
        <label>Weight</label>
        <div className="ui input">
          <input type="text" placeholder="Weight" />
        </div>
      </div>

      <div className="four wide field">
        <label>Reps</label>
        <div className="ui labeled input">
          <div className="ui label">
            X
      </div>
          <input type="text" placeholder="Reps" />
        </div>
      </div>


      <div className="four wide field">
        <label>RPE</label>
        <div className="ui labeled input">
          <div className="ui label">
            @
      </div>
          <input type="text" placeholder="RPE" />
        </div>
      </div>
    </div>
  )
}

export default SetInput;