import { combineReducers } from 'redux';

import calculateMax from '../Utils/calculateMax';

const currentSetReducer = (currentSet = null, action) => {
  if(action.type === 'CURRENT_SET_COMPLETE') {
    let max = calculateMax(currentSet.weight, currentSet.reps, currentSet.rpe);
    return {
      ...currentSet,
      max
    }
  }

  return currentSet;
}

export default combineReducers({
  currentSet: currentSetReducer
});