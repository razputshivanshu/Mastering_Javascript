//Reduce JS

const arr = [1, 2, 3, 4, 5, 6, 7];

let initialValue = 0;

let sumWithInitial = arr.reduce((accumulator, current) => {
  return accumulator + current;
}, initialValue);

console.log(sumWithInitial);
