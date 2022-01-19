const exerciseTen = require('./exercise-10');
const { inputData, expectedOutput } = require('./exercise-10-data');

describe('Exercise 10', () => {
  test('Converts input data to expected output', () => {
    const result = exerciseTen(inputData);
    expect(result).toEqual(expectedOutput);
  })
})