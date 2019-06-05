import calculateMax from './calculateMax';

describe('Utils - calculateMax', () => {
  it('Calculates RPE with valid inputs', () => {
    expect(calculateMax(100, 3, 8)).toEqual(116)
  });

  it('Returns null with invalid RPE', () => {
    expect(calculateMax(100, 3, 11)).toEqual(null)
  });

  it('Returns null with invalid Reps', () => {
    expect(calculateMax(100, -2, 8)).toEqual(null)
  });
})