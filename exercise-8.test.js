const exerciseEight = require('./exercise-8');
const countryData = require('./country-data');

describe('Exercise 8', () => {
  test('Uses every method', () => {
    const inputArray = [];
    const everySpy = jest.spyOn(inputArray, 'every');
    exerciseEight(inputArray);
    expect(everySpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [...countryData];
    exerciseEight(inputArray);
    expect(inputArray).toEqual(countryData);
  })

  test('Returns true if threshold below all population figures', () => {
    const result = exerciseEight(countryData, 1);
    expect(result).toBe(true)
  })

  test('Returns false if threshold is between population figures', () => {
    const result = exerciseEight(countryData, 200000);
    expect(result).toBe(false)
  })

  test('Returns false if threshold is above all population figures', () => {
    const result = exerciseEight(countryData, 1000000000);
    expect(result).toBe(false)
  })
})