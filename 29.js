// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];

//let array2 =  ["item1", "item2"];

// let array2 = array1.slice(0);
//we can write like this for adding the elements
//let array2 = array1.slice(0).concat(["item3", "item4"]);

// let array2 = [].concat(array1); //output = array2 (2) ['item1', 'item2']
//we can write like this for adding the elements
//let array2 = [].concat(array1, "item3", "item4");  //output =array2 (4) ['item1', 'item2', 'item3', 'item4']

//new way
//spread oprator

// let array2 = [...array1];
//we can write like this for adding the elements
//let array2 = [...array1, "item3", "item4"]; //output =array2 (4) ['item1', 'item2', 'item3', 'item4']
//or like this
let moreArray = ["item3", "item4"];
let array2 = [...array1, ...moreArray];
array1.push("item3");
console.log("after pushing element to array 1");

//output will be same all the above method
console.log(array1===array2);
console.log("array1", array1);
console.log("array2", array2);
