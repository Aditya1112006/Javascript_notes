// Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
let number = 40;
if (number % 10 == 0){
    console.log("good");
}else{
    "bad"
}

// Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert (by substituting their name & age) : name is age years old.
// let name = prompt("Enter your name :");
// let age = prompt("Enter you age :");

// alert(`${name} is ${age} year old`);

// Write a switch statement to print the months in a quarter.Months in Quarter 1 : January, February, March Months in Quarter 2 : April, May, June Months in Quarter 3 : July, August, September Months in Quarter 4: October, November, December
let month = 4;
switch (month) {
    case 1 :
        console.log("January, February, March");
    break
    case 2 :
        console.log("April, May, June");
    break
    case 3 :
        console.log("July, August, September");
    break
    case 4 :
        console.log("October, November, December");
    break
    default:
        console.log("Invalid number!!");
}

//  A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
let str = "Aditya";
if ((str["0"] == "A" || str["0"] == "a") && str.length > 5){
    console.log("It is a golden string")
}else{
    console.log("It is not a golden string")
}

// Write a program to find the largest of three number
let a = 9;
let b = 2;
let c = 22;

if(a > b && a > c){
    console.log("a is greater then b and c");
}else if(b > a && b >c){
    console.log("b is greater then a and c");
}else{
    console.log("c is greater then b and a");
}

// Write a program to check if 2 numbers have the same last digit.Eg : 32 and 47852 have the same last digit i.e. 2
let num1 = 39735;
let num2 = 55;

if(num1 % 10 == num2 % 10){
    console.log("They have the same last digit.");
}else{
    console.log("They do not have the same last digit");
}