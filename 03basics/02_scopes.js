// // var c = 300;
// let a = 20;

// if(true){
//   let a = 10;
//   const b = 20;
//   // c = 30;
//   console.log("Inner", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one() {
//   const username = "hitesh";
//   function second() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website);
//   second();
// }


// one();





if (true) {
  const username = "Shiv";
  if (username === "Shiv") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
 
}

//  console.log(username);


// ++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++
// let value = addone(5);
// console.log(value);


// function addone(num) {
//   return num + 1;
// }

//No problem in above one


addTwo(5);

const addTwo = function (num) {
  return num + 2;

}

//Now it is getting error becasue here we are declaring functions as a variable




