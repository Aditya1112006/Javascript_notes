let prompt = require("prompt-sync")();

const max = Number(prompt("Enter the maximum number: "));
const random = Math.floor(Math.random() * max) + 1;

let num = prompt(`Enter a number from 1 to ${max} (or type "exit"): `);

while (true) {

    if (num === "exit") {
        console.log("Game exited.");
        console.log("Correct number is", random);
        break;
    }

    num = Number(num);

    if (num === random) {
        console.log("Woooh!!! You guessed it correctly.");
        break;
    } else {
        console.log("Try again my son!!");
        num = prompt(`Enter a number from 1 to ${max} (or type "exit"): `);
    }
}