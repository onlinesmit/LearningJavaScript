//trim
//uppercase
//lowercase
//slice

// let firstName  = "    Smit    ";
// console.log(firstName.length); // out pur 12 

// // after apply trim
// firstName = firstName.trim(); //"smit"  it remove the space out 4
// console.log(firstName.length);

let firstName  = "Smit";
//  firstName=firstName.toUpperCase();
firstName=firstName.toLowerCase();
 console.log(firstName);

// start index and end index

// let newString=firstName.slice(3);  //output=3
// let newString=firstName.slice(1,3);  //output=mi
let newString=firstName.slice(0,3);  //output=3

console.log(newString);