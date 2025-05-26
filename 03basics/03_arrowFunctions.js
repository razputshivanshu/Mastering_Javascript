// ==============================
// Working with Objects and 'this'
// ==============================

const user = {
  username: "Shivanshu",
  price: "999",
  welcomeMessage: function () {
    console.log(`Welcome to our website!! Hey ${this.username}`);
  }
};

user.welcomeMessage(); // Output: Welcome to our website!! Hey Shivanshu

user.username = "Unnati";
user.welcomeMessage(); // Output: Welcome to our website!! Hey Unnati

// ==============================
// 'this' in Global Context
// ==============================

console.log(this); // In browser: window object, In Node.js: {}

// ==============================
// 'this' Inside Regular Functions
// ==============================

function chai() {
  let username = "hitesh";
  console.log(this.username); // undefined, because 'this' doesn't point to function's scope
}

chai();

// ==============================
// Arrow Functions and 'this'
// ==============================

const chai2 = function () {
  console.log(this); // Logs global object (or undefined in strict mode)
};

const chaiArrow = () => {
  const username = "Shiv";
  console.log("I am Shivanshu Chauhan. I am going to master DSA and Development!!!");
  console.log(this); // Arrow functions inherit 'this' from their lexical scope
};

chaiArrow();
chai2();

// ==============================
// Arrow Function with Explicit Return
// ==============================

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(5, 2)); // Output: 7

// ==============================
// Arrow Function with Implicit Return
// ==============================

const addTwoSimple = (num1, num2) => (num1 + num2);

console.log(addTwoSimple(3, 4)); // Output: 7

// ==============================
// Arrow Function Returning an Object
// ==============================

const getUser = (num1, num2) => ({ username: "Hitesh" });

console.log(getUser(5, 2)); // Output: { username: 'Hitesh' }

// ==============================
// Summary Notes (as comments)
// ==============================

/*
- Inside objects, 'this' refers to the current object.
- In regular functions, 'this' refers to the global object (or undefined in strict mode).
- Arrow functions do not have their own 'this'. They use the 'this' from their surrounding (lexical) context.
- Arrow functions with {} require an explicit return.
- Arrow functions with () return the expression implicitly.
- To return an object from an arrow function, wrap it in parentheses ().
*/
