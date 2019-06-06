
//action creator to complete current set
//will be passed to the reducer to calculate the est. max weight
/* 
  currentSet: {
    weight, reps, rpe
  }
*/
export const currentSetComplete = (currentSet) => {
  return {
    type: 'CURRENT_SET_COMPLETE',
    payload: currentSet
  }
}