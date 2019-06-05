//map setup to get the multiplier for max weight
//0 is first element to adjust for the number of reps coming in being 1+
const rpeMap = { 
  6.5: [0, 0.88, 0.85, 0.82, 0.8, 0.77, 0.75, 0.72, 0.69, 0.67, 0.64],
  7: [0, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74, 0.71, 0.68, 0.65],  
  7.5: [0, 0.91, 0.88, 0.85, 0.82, 0.8, 0.77, 0.75, 0.72, 0.69, 0.67], 
  8: [0, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74, 0.71, 0.68], 
  8.5: [0, 0.94, 0.91, 0.88, 0.85, 0.82, 0.8, 0.77, 0.75, 0.72, 0.69],
  9: [0, 0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74, 0.71],  
  9.5: [0, 0.98, 0.94, 0.91, 0.88, 0.85, 0.82, 0.8, 0.77, 0.75, 0.72],
  10: [0, 1, 0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74]
}


function calculateMax(weight, reps, rpe) {

  if (!rpeMap[rpe] || !rpeMap[rpe][reps]) {
    return null;
  }

  return Math.floor(weight / rpeMap[rpe][reps]);
}


export default calculateMax;