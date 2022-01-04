const exerciseSeven = require('./exercise-7');
const countryData = require('./country-data');

describe('Exercise 7', () => {
  test('Uses find method', () => {
    const inputArray = [];
    const findSpy = jest.spyOn(inputArray, 'find');
    exerciseSeven(inputArray);
    expect(findSpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [...countryData];
    exerciseSeven(inputArray);
    expect(inputArray).toEqual(countryData);
  })

  test('Returns correct object if United Kingdom is passed', () => {
    const result = exerciseSeven(countryData, 'United Kingdom');
    expect(result).toEqual(countryData[0])
  })

  test('Returns undefined if name is not present in array', () => {
    const result = exerciseSeven(countryData, 'Non-existant land!');
    expect(result).toEqual(undefined)
  })
})