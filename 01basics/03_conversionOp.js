// let score = "33abc";
// let score = null;
let score = undefined;

console.log(typeof (score));


//conversion of string to number
let valueInNumber = Number(score);

// console.log(typeof (valueInNumber));
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (not an number) but type remains number
// "true" ==> 1


// let isLoggedIn = "";
let isLoggedIn = "shiavnshu";
console.log(typeof (isLoggedIn));
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof (booleanIsLoggedIn));


// 1 -> true
// 0 -> false
// ""-> false
// "abc" -> true;


let someNumber = 33;
let numToString = String(someNumber);

console.log(typeof (numToString));
console.log(numToString);