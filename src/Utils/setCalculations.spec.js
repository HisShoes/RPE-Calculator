import { calculateMax, calculateSetWeight } from './setCalculations';

//unit tests for calculations driven by the RPE grid
describe('Utils - setCalculations', () => {
  //tests for calculate max
  it('Calculates Max with valid inputs', () => {
    expect(calculateMax(100, 3, 8)).toEqual(116);
  });

  it('Calculate Max returns null with invalid RPE', () => {
    expect(calculateMax(100, 3, 11)).toEqual(null);
  });

  it('Calculate Max returns null with invalid Reps', () => {
    expect(calculateMax(100, -2, 8)).toEqual(null);
  });

  //tests for calculate set weight
  it('Calculates Set Weight with valid inputs', () => {
    expect(calculateSetWeight(100, 5, 9)).toEqual(84);
  });

  it('Calculate Set Weight returns null with invalid RPE', () => {
    expect(calculateSetWeight(100, 5, 3)).toEqual(null);
  });

  it('Calculate Set Weight null with invalid Reps', () => {
    expect(calculateSetWeight(100, 11, 8)).toEqual(null);
  });
})