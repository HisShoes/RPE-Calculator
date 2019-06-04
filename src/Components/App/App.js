//import React and ReactDOM
import React from 'react';

import RpeSetDisplay from '../RpeSetDisplay/RpeSetDisplay';

//create component
const App = () => {
  return (
    <div style={{ padding: '2em' }}>
      <h4 className="ui dividing header">RPE Calculator</h4>
      <RpeSetDisplay />
    </div >
  );
}

export default App;