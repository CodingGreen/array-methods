const exerciseSix = require('./exercise-6');
const countryData = require('./country-data');

describe('Exercise 6', () => {
  test('Uses reduce method', () => {
    const inputArray = [];
    const reduceSpy = jest.spyOn(inputArray, 'reduce');
    exerciseSix(inputArray);
    expect(reduceSpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [...countryData];
    exerciseSix(inputArray);
    expect(inputArray).toEqual(countryData);
  })

  test('Sets the starting accumulator to empty object', () => {
    const reduceSpy = jest.spyOn(countryData, 'reduce');
    exerciseSix(countryData);
    expect(reduceSpy).toHaveBeenCalled();
    expect(reduceSpy.mock.calls[0][1]).toEqual({});
  })

  const expectedResult = {
    Bangladesh: 163046161,
    "Federated States of Micronesia": 113815,
    Kenya: 52573973,
    Nigeria: 200963599,
    "United Kingdom": 67530172,
  }

   test('Creates population object', () => {
    const result = exerciseSix(countryData);
    expect(result).toEqual(expectedResult)
  })
})