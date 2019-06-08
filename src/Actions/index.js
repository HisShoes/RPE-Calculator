
//action creator to complete current set
//will be passed to the reducer to calculate the est. max weight
/* 
  set: {
    weight, reps, rpe, max, setPercentOfMax
  }
*/
export const currentSet = (set) => {
  return {
    type: 'CURRENT_SET',
    payload: set
  }
}