// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);   //output  ['apple', 'mango', 'grapes']
// push is to aading the value in the array in the last
// fruits.push("banana");
// console.log(fruits);  //output   ['apple', 'mango', 'grapes', 'banana']

// pop is used to remove the elements from the last
// console.log(fruits.pop()); // output banana
// console.log(fruits); // output  ['apple', 'mango', 'grapes']

//we can also write like this
// let poppedFruit = fruits.pop();
// console.log(fruits);  //output after pooped ['apple', 'mango', 'grapes']
// console.log("popped fruits is", poppedFruit);  //output banana

// unshift  is used for adding the value at the starting
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift is used for remove elements from starting
let removedFruit = fruits.shift();
 console.log(fruits);
console.log("removed fruits is ", removedFruit);