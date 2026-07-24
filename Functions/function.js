const prompt = require("prompt-sync")();

function hello(){
    console.log("Hello");
}


function isAdult(){
    let age = prompt("Enter you age : ");
    if(age>=18){
        console.log("You are adult");
    }else{
        console.log("You are cry baby");
    }
}

isAdult();