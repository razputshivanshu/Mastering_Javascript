// JavaScript Array Methods: forEach, filter, map, and reduce

// ======================
// forEach()
// ======================
// The forEach() method executes a provided function once for each array element.
// Note: forEach() doesn't return any value (it returns undefined).

const coding = ['js', 'ruby', 'c++', 'react', 'c'];

const values = coding.forEach(element => {
  // This will print each element
  console.log(element);

  // Returning inside forEach has no effect
  return element;
});

console.log("Returned from forEach:", values); // undefined

// ======================
// filter()
// ======================
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredNums = myNums.filter((num) => {
  return num > 4;
});

console.log("Filtered with filter():", filteredNums); // [5, 6, 7, 8, 9]

// You can achieve the same with forEach, but it's more manual:

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log("Filtered with forEach():", newNums); // [5, 6, 7, 8, 9]

// ======================
// Real-world Example with filter()
// ======================

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books that are in 'Science' genre and have edition year >= 2010

const scienceBooks = books.filter((book) => {
  return book.genre === "Science" && book.edition >= 2010;
});

console.log("Filtered science books:", scienceBooks);

// ======================
// Summary:
// - Use forEach when you just want to loop and perform side effects (like console.log).
// - Use filter when you want to **return a subset** of the original array based on a condition.
// - map and reduce are other powerful methods to transform and summarize arrays, respectively.
// ======================
