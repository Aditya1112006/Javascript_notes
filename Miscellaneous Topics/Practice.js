// Write a arrow function to return the square of number n;

const square = n => (n*n);

console.log(square(4));

//Write a function that print hello world for five times in interval of 2 seconds.

let id = setInterval(() =>{
    console.log("hello world");
}, 2000);

setTimeout( () => {
    clearInterval(id)
}, 10000);