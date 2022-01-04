const exerciseThree = require('./exercise-3')

describe('Exercise 3', () => {
  test('Uses map method', () => {
    const inputArray = [];
    const mapSpy = jest.spyOn(inputArray, 'map');
    exerciseThree(inputArray);
    expect(mapSpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [1, 2];
    exerciseThree(inputArray);
    expect(inputArray).toEqual([1, 2]);
  })

  test('Doubles all numbers in the array', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = exerciseThree(inputArray);
    expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
  })

  test('Handles 0 in input', () => {
    const inputArray = [0];
    const result = exerciseThree(inputArray);
    expect(result).toEqual([0])
  })

  test('Handles negative numbers in input', () => {
    const inputArray = [-1, -3];
    const result = exerciseThree(inputArray);
    expect(result).toEqual([-2, -6])
  })
})