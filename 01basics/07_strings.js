// String 

//Strings can be denoted by single '' as well as "" double quotes.

console.log("hello" + "world");

let name = "hitesh";
const repoCount = 50;


//To concatenate we use '+'
console.log(name + repoCount + " value");

//But good practice is that we should not use + to concatenate in modern js
// If we want to concatenate in mdoern JS, use backticks ``

console.log(`Hello my name is ${name}. And my Repo Count is ${repoCount}`);
//Above one is string interpolation.


console.log("hello");

//2nd way to declare a string, but the work for both will remain same
const gameName = new String('Name');
console.log(gameName);
// let name = "hitesh";
           //  012345


console.log(name[0]);
console.log(name.__proto__);
console.log(name.length)
console.log(name.charAt(2));
console.log(name.indexOf('t'));

const newString = name.substring(0, 2); //it will include 0 1, last value will not be included
console.log(newString); //Substring doesn't work with ngeative values 

const newSlice = name.slice(-4, 4); //slice does work with negative values
console.log(newSlice);


const newStringOne = "     hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim());


let url = "https://hitesh.com/hitesh%20chaudhary";

url = url.replace('%20', '-');

console.log(url);


console.log(url.includes('hitesh'));
console.log(url.includes('Shivanshu'));