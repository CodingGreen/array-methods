// Exercise 1
// Return all numbers in the array which are less than 6.

// Input is an array of numbers such as [1,2,3,4,5]
function exerciseOne(numbersArray) {
  return numbersArray.filter((number) => (number < 6))
}

module.exports = exerciseOne;