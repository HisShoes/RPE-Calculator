//import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App/App';
import rootReducer from './Reducers';

//show on screen
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);