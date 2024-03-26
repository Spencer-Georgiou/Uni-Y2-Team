// All tests files are located in the '__test' directory and end with '.test.js' by convention.
const demoSum = require('../demoSum')

// It is supposed to return the correct value of two numbers.
test('adds 1 + 2 to equal 3', () => {
  expect(demoSum(1, 2)).toBe(3)
})
