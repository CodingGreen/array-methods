const exerciseNine = require('./exercise-9');
const countryData = require('./country-data');

describe('Exercise 9', () => {
  test('Uses some method', () => {
    const inputArray = [];
    const someSpy = jest.spyOn(inputArray, 'some');
    exerciseNine(inputArray);
    expect(someSpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [...countryData];
    exerciseNine(inputArray);
    expect(inputArray).toEqual(countryData);
  })

  test('Returns true when there is one matching entry', () => {
    const result = exerciseNine(countryData, 'Europe');
    expect(result).toBe(true)
  })

  test('Returns true when there is two matching entries', () => {
    const result = exerciseNine(countryData, 'Africa');
    expect(result).toBe(true)
  })

  test('Returns false when there is no matching entries', () => {
    const result = exerciseNine(countryData, 'South America');
    expect(result).toBe(false)
  })
})