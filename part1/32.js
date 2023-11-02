// while loop in array 
const fruits = ["apple", "mango", "grapes"];

// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

//to uppercase
// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i].toUpperCase());
//     i++;
// }

//storing the value in new variable
const fruits2 = [];
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);