const prompt = require("prompt-sync")();
// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// Print odd numbers 1 to 15
//Method 1
for(let n = 1; n<=15; n+=2){
        console.log(n);
}

//Method 2
for(let n = 1; n<=15; n++){
    if(n%2!=0){
        console.log(n);
    }
}


// Print even numbers 2 to 10
//Method 1
for(let n = 2; n<=10; n+=2){
        console.log(n);
}

// Method 2
for(let n = 2; n<=10; n++){
    if(n%2 == 0){
        console.log(n);
    }
}

// Multiplication tbale of 5

let n = prompt("Enter you number : ");
n = parseInt(n);
for(let i =1; i<=10; i++){
    console.log(`${n} * ${i} = ${n*i}`);
}