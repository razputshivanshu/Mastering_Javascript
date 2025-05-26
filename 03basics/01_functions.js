function sayName() {
  console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
  return number1 + number2;
}


const result = addTwoNumber(5, 7);
console.log(result);

function loginUserMessage(username) {
  return `${username} just logged in.`;
}

const message = loginUserMessage("Shivanshu");
console.log(message);



function calculateCartPrice(...num1) {
  return num1;
}

const price = calculateCartPrice(200,400,500);
console.log(price);