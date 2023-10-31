// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 15;
//let userGuess = prompt("Guess a number"); 
//prompt takes the input in browser 
 //prompt take a input in the form of string

 let userGuess = +prompt("Guess a number"); //use of + its change the string value o number
if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}