// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

//for printing 0 to 9
// for(let i=0; i<=9;i++){
//     console.log(i);
// }

//length property
// console.log(fruits.length);  //output 4
// console.log(fruits[fruits.length-2]);  //output grapes

//  for(let i=0; i < fruits.length; i++){
//     console.log(fruits);
//  }


 let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);  //output 4) ['APPLE', 'MANGO', 'GRAPES', 'BANANA']