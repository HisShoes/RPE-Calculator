import { combineReducers } from 'redux';

import {calculateMax} from '../Utils/setCalculations';

const currentSetReducer = (currentSet = {}, action) => {
  if(action.type === 'CURRENT_SET') {
    //merge new set values into existing set
    let set = Object.assign({}, currentSet, action.payload);

    //calculate extra set values and return to set state
    set.max = calculateMax(set.weight, set.reps, set.rpe);
    set.setPercentOfMax = set.max ? Math.floor(set.weight / set.max*100): null;
    return set;
  }

  return currentSet;
}

export default combineReducers({
  currentSet: currentSetReducer
});