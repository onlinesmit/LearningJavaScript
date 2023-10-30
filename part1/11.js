//undefined 
//null

// let firstName;
// console.log(typeof firstName); //undefined
// firstName= "Smit;"
// console.log(firstName); // out put smit

//null

// let firstName = null;
// console.log(typeof firstName); //this is not printed null it print as object and is shows the bugs in javascript....when we print type of null tne its output printed as object. 
// firstName= "Smit;"
// console.log(firstName); // out put smit

//BigInt

//let myNumber = BigInt(23987348956387); //not need to  take big no we can also take small number
let myNumber = BigInt(7);
let sameMyNumber = 123n; //this is also a BigInt
 
 
console.log(myNumber); // output  7n
console.log(sameMyNumber); //output 123n
console.log(myNumber+sameMyNumber);   //output 130n