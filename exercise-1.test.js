const exerciseOne = require('./exercise-1')

describe('Exercise 1', () => {
  test('Uses filter method', () => {
    const inputArray = [];
    const filterSpy = jest.spyOn(inputArray, 'filter');
    exerciseOne(inputArray);
    expect(filterSpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [3, 9];
    exerciseOne(inputArray);
    expect(inputArray).toEqual([3, 9]);
  })

  test('Only includes numbers less than 6', () => {
    const inputArray = [1, 2, 3, 7, 11, 12];
    const result = exerciseOne(inputArray);
    expect(result).toEqual([1, 2, 3])
  })

  test('Does not include the number 6', () => {
    const inputArray = [6];
    const result = exerciseOne(inputArray);
    expect(result).toEqual([])
  })

  test('Does include negative numbers', () => {
    const inputArray = [-1, -2, -3];
    const result = exerciseOne(inputArray);
    expect(result).toEqual([-1, -2, -3])
  })

  test('Does include 0', () => {
    const inputArray = [0];
    const result = exerciseOne(inputArray);
    expect(result).toEqual([0])
  })
})