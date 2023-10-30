// and  or operator 

let firstName = "Smit";
let age = 16;

if(firstName[0] === "S"){
    console.log("your name starts with S") //output
}

if(age > 18){
    console.log("you are above 18");
}
else{
    console.log("Youre not above 18"); //output
}

if(firstName[0] === "S" && age>18){
    console.log("Name starts with S and above 18");
}else{
    console.log("inside else");  //output
}
 

// if(firstName[0] === "S" || age>18){
//     console.log("inside if");  // out put inside if
// }else{
//     console.log("inside else");
// }