let prompt = require("prompt-sync")();

let guess = prompt("Enter number from 1 to 10 : ");

let num = Math.floor(Math.random() * 10);
console.log("The random number is " + num);

if(guess == num){
    console.log("Your number matched the random number good my boiii!!!");
}else{
    console.log("Try again!!!!");
}