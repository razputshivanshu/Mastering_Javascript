// Define an array literal with mixed data types
const array = [1, 2, 3, 4, 5, 7, 8, true, "hitesh"];
// Access the element at index 8 (arrays are 0-based) and log it
console.log(array[8]); // "hitesh"



/* 
  Create a new array using the Array constructor.
  Note: new Array(…) behaves the same as […], but if you pass a single numeric argument 
  it creates an empty array of that length (which can be confusing).
*/
const arr2 = new Array(1, 2, 3, 5, 6, 7);
// Log the number of elements in arr2
console.log(arr2.length); // 6



// ──────── Array Methods ─────────

// push(...items): adds items to the end of the array
// arr2.push(8);
// arr2.push(9, 10);

// pop(): removes the last item and returns it
// const last = arr2.pop();

// unshift(item): adds an item to the start, but shifts all other items (costly for large arrays)
// arr2.unshift(9);

// shift(): removes the first item and returns it, shifting the rest
// const first = arr2.shift();

// includes(value): returns true if value is found in the array
// console.log(arr2.includes(8)); // false

// indexOf(value): returns the first index of value, or –1 if not found
// console.log(arr2.indexOf(7));   // 5
// console.log(arr2.indexOf(17));  // -1

// join(separator): concatenates all elements into a string (separator defaults to ",")
// const newArrString = arr2.join();
// console.log(newArrString); // "1,2,3,5,6,7"
// console.log(arr2);         // original array is unchanged



// ──────── Difference between slice() and splice() ─────────

// slice(start, end):
//   • returns a shallow copy of arr2 from index start up to (but not including) end
//   • does NOT modify the original array

// splice(start, deleteCount, ...itemsToAdd):
//   • removes deleteCount elements from index start in the original array
//   • can also insert new items at that position
//   • returns an array of removed elements (modifies the original)

// Show arr2 before slicing/splicing
console.log("A", arr2); // [1, 2, 3, 5, 6, 7]

// slice example: get items at indices 1 and 2
const myn1 = arr2.slice(1, 3);
console.log(myn1);      // [2, 3]          (a new array)
console.log("B", arr2); // [1, 2, 3, 5, 6, 7] (original unchanged)

// splice example: remove 3 elements starting from index 1
const myn2 = arr2.splice(1, 3);
console.log(myn2);      // [2, 3, 5]       (elements removed)
console.log(arr2);      // [1, 6, 7]       (original modified)
