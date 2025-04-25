//Numbers and Maths
const score = 400;

const balance = new Number(5000);

console.log(balance);
console.log(score);



console.log(typeof (balance.toString().length));
console.log(balance.toFixed(2));

const otherNumber = 13.93;

console.log(otherNumber.toPrecision(2));

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));



// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math.PI);

// console.log(Math.abs(-2122));

// console.log(Math.round(2.49));
// console.log(Math.ceil(2.49));
// console.log(Math.floor(2.99));

// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));
// console.log(Math.max(2, 3, 4, 23, 23, 23, 4, 2));

console.log((Math.random() * 10) + 1);


const min = 1;
const max = 6;


const result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result);