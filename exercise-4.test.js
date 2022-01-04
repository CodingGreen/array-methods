const exerciseFour = require('./exercise-4')
const countryData = require('./country-data');

describe('Exercise 4', () => {
  test('Uses map method', () => {
    const inputArray = [];
    const mapSpy = jest.spyOn(inputArray, 'map');
    exerciseFour(inputArray);
    expect(mapSpy).toHaveBeenCalled();
  })
  
  test('Does not modify input array', () => {
    const inputArray = [...countryData];
    exerciseFour(inputArray);
    expect(inputArray).toEqual(countryData);
  })

  const expectedResult = [
    {
        name: 'United Kingdom',
        continent: 'Europe',
        population: 67530172,
        landArea: 241930,
        populationDensity: 279.1310379035258,
    },
    {
        name: 'Federated States of Micronesia',
        continent: 'Oceania',
        population: 113815,
        landArea: 702,
        populationDensity: 162.12962962962962,
    },
    {
        name: 'Bangladesh',
        continent: 'Asia',
        population: 163046161,
        landArea: 130168,
        populationDensity: 1252.5825164402925,
    },
    {
        name: 'Nigeria',
        continent: 'Africa',
        population: 200963599,
        landArea: 910768,
        populationDensity: 220.65289843297086,
    },
    {
        name: 'Kenya',
        continent: 'Africa',
        population: 52573973,
        landArea: 569140,
        populationDensity: 92.37441227114594,
    },
  ];

  test('Adds population density to every country', () => {
    const result = exerciseFour(countryData);
    expect(result).toEqual(expectedResult)
  })
})