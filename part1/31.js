// use const for creating array

// heap memory ["apple", "mango"] 0x11

//in array data store in heap so
const fruits = ["apple", "mango"]; // 0x11 adress
// if we add value in const like this its throgth error bcoz const value does not change
fruits = ["banana", "grapes"];

//but we can add value in const like this in heap emory
fruits.push("banana");
console.log(fruits);
