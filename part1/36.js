// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects  

// const person = {name:"Harshit",age:22};  //for storing the value in object we use {} and in array we use [] bracket
const person = {
    name: "Smit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
};
console.log(person);

// how to access data from objects 
console.log(person["name"]); //op= Smit
console.log(person.name); //op = Smit  //use any one of them they works as same manner .(dot) or [] two methods
console.log(person["age"]); //op= 22
console.log(person.age);  //op =22
console.log(person.hobbies); //print sll the array value
console.log(person.hobbies[2]); // listing music

// how to add key value pair to objects
// person.gender = "male";  //Output: {name: 'Smit', age: 22, hobbies: Array(3), gender: 'male'}
person["gender"] = "male";  ////Output: {name: 'Smit', age: 22, hobbies: Array(3), gender: 'male'}
console.log(person);  