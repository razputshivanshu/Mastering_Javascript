// Primitive  
// 7 Categories: String, Number, BigInt, Boolean, null, undefined, Symbol, NaN

// It works by the concept of call by value
console.log(NaN);



// Is JS dynamically types language or Statically Typed Language? It is dynamically typed language
const score = 100;
const scoreValue = 0.3;


const isLoggedIn = false;
const outsideTemp = null;

let userEmail; //it will have undefined value in it.

const id = Symbol("123");
const id2 = Symbol("123");
console.log(id);
console.log(id2);
console.log(id == id2);
console.log(id === id2);

// It is used to give unique values to an attribute

const bigNumber = 32332232323232423323232322423n;
console.log(bigNumber);
console.log(typeof (bigNumber));







// Non Primitive: Call by Reference

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"];

const student = {
  name: "Shivanshu",
  age: 22,
  class:"Aml9B"
}

console.table([student.name, student.age, student.class]);



const myfunc = function () {
  console.log("Hi from the function!!!");
}

myfunc();

console.log(typeof (myfunc));
console.log(typeof (student));
console.log(typeof (heros));


//https://262.ecma-international.org/10.0/index.html#sec-typeof-operator