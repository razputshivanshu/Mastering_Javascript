//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof (myDate));


// let myCreatedDate = new Date(2025, 3, 25); //YYYY -- MM-1 -- YYYY,
// let myCreatedDate = new Date("2025-01-25");
// let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toDateString());



let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());
console.log(Math.round(Date.now() / 1000));


let newDate = new Date();
console.log(newDate.getDate());