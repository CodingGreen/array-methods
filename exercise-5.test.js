const exerciseFive = require('./exercise-5')

describe('Exercise 5', () => {
  test('Uses reduce method', () => {
    const inputArray = [];
    const reduceSpy = jest.spyOn(inputArray, 'reduce');
    exerciseFive(inputArray);
    expect(reduceSpy).toHaveBeenCalled();
  })

  test('Does not modify input array', () => {
    const inputArray = [1, 2];
    exerciseFive(inputArray);
    expect(inputArray).toEqual([1, 2]);
  })

  test('Sets the starting accumulator to 0', () => {
    const inputArray = [1];
    const reduceSpy = jest.spyOn(inputArray, 'reduce');
    exerciseFive(inputArray);
    expect(reduceSpy).toHaveBeenCalled();
    expect(reduceSpy.mock.calls[0][1]).toBe(0);
  })

  test('Adds all numbers in the array', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = exerciseFive(inputArray);
    expect(result).toEqual(55)
  })

  test('Handles 0 in input', () => {
    const inputArray = [0];
    const result = exerciseFive(inputArray);
    expect(result).toEqual(0)
  })

  test('Handles negative numbers in input', () => {
    const inputArray = [-1, -3];
    const result = exerciseFive(inputArray);
    expect(result).toEqual(-4)
  })

  test('Handles positive and negative numbers in input', () => {
    const inputArray = [-1, -3, 5];
    const result = exerciseFive(inputArray);
    expect(result).toEqual(1)
  })
})