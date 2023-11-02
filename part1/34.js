// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let index in fruits) {
//    // console.log(index);  //it prints the index value output will be 0 1 2 3 4 

//     console.log(fruits[index]); //it prints the elements value output will be  apple mango grapes fruits3 fruits4
// }

// for(let index in fruits){  //in take the index value and of the give the elements name
//      console.log(fruits[index].toUpperCase());
// }

for(let index in fruits){  //in take the index value and of the give the elements name
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);