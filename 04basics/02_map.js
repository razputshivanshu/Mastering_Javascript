// JavaScript Array Method: map() and Chaining with filter()

// ======================
// map()
// ======================
// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Example using map():
const mappedNums = myNums.map((num) => {
  return num + 10; // Adds 10 to each number
});

console.log("Mapped Numbers (+10):", mappedNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19]

// Same logic with forEach requires manual array creation:
const manualMappedNums = [];

myNums.forEach((num) => {
  manualMappedNums.push(num + 10);
});

console.log("Mapped with forEach:", manualMappedNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19]

// ======================
// Chaining map() with filter()
// ======================
// Chaining allows us to combine multiple array methods in a clean and readable way.

const newNums = myNums
  .map((num) => {
    return num + 10; // First, add 10 to each number
  })
  .filter((num) => {
    return num % 2 === 0; // Then, keep only even numbers
  });

console.log("Chained map and filter result:", newNums); // [12, 14, 16, 18]

// ======================
// Summary:
// - Use map() when you want to transform each element in an array.
// - Use forEach when you're doing side effects or manually pushing to a new array.
// - Chaining map() and filter() is a powerful and readable way to perform multiple transformations.
// ======================