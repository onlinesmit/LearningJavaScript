// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items or elements called array

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed); //output  [1, 2, 2.3, 'string', null, undefined]
// console.log(mixed[3]); //out  string
// console.log(mixed[4]);  //out  null
// console.log(numbers); //output  [1, 2, 3, 4]
// console.log(numbers[4]); //output undefined
// console.log(numbers[2]); //output  3
// //console.log(fruits);  //output ['apple', 'mango', 'grapes']
// console.log(fruits[1]); //output mango

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
fruits[1] = "banana"; //output ['apple', 'mango', 'grapes']
console.log(fruits); //output  ['apple', 'banana', 'grapes']

 let obj = {}; // object literal  & output is object

console.log(typeof fruits);  //output  object
 console.log(typeof obj);  
console.log(Array.isArray(fruits)); //its provides the facility to check the given array is array or not
//the output is true bcoz the given array is array

console.log(Array.isArray(obj));  // output false


// array indexing 