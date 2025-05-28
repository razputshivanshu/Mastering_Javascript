//Immediately invaoked functions expressions(IIFE)

//Regular Function
// function chai() {
//   console.log("DB Connected!!!");

// }

// chai();


//IIFE functions

(function chai() {
  console.log("DB Connected1!!!");

})();
//Sometimes, we do have problem with the global scope pollution thats why we use IIFE
    // First parenthesis for functions and second is for execution call
// ()()



(() => {
  console.log("DB connected 2!!!");
})();


//When we have 2 IIFe it gives error, if we don't use semicolon along with it, because functions is invoked but they don't know where we should stop the execution
//There will be always


// Another way to use IIFE

((name) => {
  console.log(`Hello Mr. ${name}`);
})("Shivanshu");