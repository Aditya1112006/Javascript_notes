const prompt = require("prompt-sync")();
// while loop used to guess movie game

let movie = "iron man";

let guess = prompt("Enter the movie name to guess it : ");

while((guess != movie)&&(guess != "quit")){
    guess = prompt("Wrong guess try again : ");
}
if(guess == movie){
    console.log("You guessed it correct it's ", movie)
}else if(guess == "quit"){
    console.log("You left the game");
}