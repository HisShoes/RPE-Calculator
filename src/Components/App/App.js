//import React and ReactDOM
import React from 'react';


//create component
const App = () => {
  return (
    <div style={{ padding: '2em' }}>
      <div className="ui form">
        <h4 className="ui dividing header">RPE Calculator</h4>

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

          
          <div className="four wide field">
          <label>e1RM</label>
          <input readonly="" defaultValue="145kg" type="text" />
          </div>
          
          <div className="four wide field">
          <label>Set % of Max</label>
          <input readonly="" defaultValue="75%" type="text" />
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;