const exerciseTwo = require('./exercise-2')
const countryData = require('./country-data');

describe('Exercise 2', () => {
  test('Uses filter method', () => {
    const inputArray = [];
    const filterSpy = jest.spyOn(inputArray, 'filter');
    exerciseTwo(inputArray);
    expect(filterSpy).toHaveBeenCalled();
  })  
  
  test('Does not modify input array', () => {
    const inputArray = [...countryData];
    exerciseTwo(inputArray);
    expect(inputArray).toEqual(countryData);
  })

  test('Returns United Kingdom when Europe is passed', () => {
    const result = exerciseTwo(countryData, 'Europe');
    expect(result).toEqual([{
      name: 'United Kingdom',
      continent: 'Europe',
      population: 67530172,
      landArea: 241930,
    }])
  })

  test('Returns Nigeria & Kenya when Africa is passed', () => {
    const result = exerciseTwo(countryData, 'Africa');
    expect(result).toEqual([
      {
        name: 'Nigeria',
        continent: 'Africa',
        population: 200963599,
        landArea: 910768,
      },
      {
        name: 'Kenya',
        continent: 'Africa',
        population: 52573973,
        landArea: 569140,
      },
    ])
  })

  test('Returns empty array if South America is passed', () => {
    const result = exerciseTwo(countryData, 'South America');
    expect(result).toEqual([])
  })
})