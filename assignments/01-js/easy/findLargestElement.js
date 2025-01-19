/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    // ... spread operator: spreads the array elements as individual elements
    return numbers.length ? Math.max(...numbers) : undefined;
}

module.exports = findLargestElement;