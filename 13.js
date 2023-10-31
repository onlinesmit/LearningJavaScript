//truly and falsy values

// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 1; //truly

// if(firstName){
//     console.log(firstName); //1
// }else{
//     console.log("firstName is kinda empty");
// }

let firstName= 0; //falsy

if(firstName){
    console.log(firstName); 
}else{
    console.log("firstName is kinda empty"); //this is the output
}