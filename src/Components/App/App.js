//import React and ReactDOM
import React from 'react';

import SetDisplay from '../SetDisplay/SetDisplay';

//create component
const App = () => {
  return (
    <div style={{ padding: '2em' }}>
      <h4 className="ui dividing header">RPE Calculator</h4>
      <SetDisplay />
    </div >
  );
}

export default App;