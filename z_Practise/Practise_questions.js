const prompt = require("prompt-sync")();
// // // Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
// // let number = 40;
// // if (number % 10 == 0){
// //     console.log("good");
// // }else{
// //     "bad"
// // }

// // // Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert (by substituting their name & age) : name is age years old.
// // // let name = prompt("Enter your name :");
// // // let age = prompt("Enter you age :");

// // // alert(`${name} is ${age} year old`);

// // // Write a switch statement to print the months in a quarter.Months in Quarter 1 : January, February, March Months in Quarter 2 : April, May, June Months in Quarter 3 : July, August, September Months in Quarter 4: October, November, December
// // let month = 4;
// // switch (month) {
// //     case 1 :
// //         console.log("January, February, March");
// //     break
// //     case 2 :
// //         console.log("April, May, June");
// //     break
// //     case 3 :
// //         console.log("July, August, September");
// //     break
// //     case 4 :
// //         console.log("October, November, December");
// //     break
// //     default:
// //         console.log("Invalid number!!");
// // }

// // //  A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
// // let str = "Aditya";
// // if ((str["0"] == "A" || str["0"] == "a") && str.length > 5){
// //     console.log("It is a golden string")
// // }else{
// //     console.log("It is not a golden string")
// // }

// // // Write a program to find the largest of three number
// // let a = 9;
// // let b = 2;
// // let c = 22;

// // if(a > b && a > c){
// //     console.log("a is greater then b and c");
// // }else if(b > a && b >c){
// //     console.log("b is greater then a and c");
// // }else{
// //     console.log("c is greater then b and a");
// // }

// // // Write a program to check if 2 numbers have the same last digit.Eg : 32 and 47852 have the same last digit i.e. 2
// // let num1 = 39735;
// // let num2 = 55;

// // if(num1 % 10 == num2 % 10){
// //     console.log("They have the same last digit.");
// // }else{
// //     console.log("They do not have the same last digit");
// // }

// // Write a JavaScript program to get the first n elements of an array. [n can be any positive number].For example: for array [7, 9, 0, -2] and n=3Print: [7, 9, 0]

// let arr = [4, 8, 2, 9, -3, -2, 7, 0, -22];
// let n = 4;

// let ans = arr.slice(0,n);
// console.log(ans);

// // Write a JavaScript program to get the last n elements of an array. [n can be any positive number].For example: for array [7, 9, 0, -2] and n=3Print: [ 9, 0, -2]

// let arr1 = [4, 8, 2, 9, -3, -2, 7, 0, -22];
// let n1 = 5;

// let ans2 = arr1.slice(arr.length-n);
// console.log(ans2);

// // Write a JavaScript program to check whether a string is blank or not

// let str = "Aditya";

// if(str.length == 0){
//     console.log("String is blank");
// }else{
//     console.log("String is not blank")
// }

// // Write a JavaScript program to check whether character at the given index is lower case

// let str1 = "KdjhHEIjIWENne";
// let idx = 3

// if (str[idx] == str[idx].toLowerCase()){
//     console.log("It is a lower case");
// }else{
//     console.log("It is not a lower case");
// }

// //Write a JavaScript program to strip leading and trailing spaces from a string.

// let str2 = prompt("Enter the string : ");
// console.log(`Original string = ${str2}`);
// console.log(`String with no spaces = ${str2.trim()}`);

// //  Write a JavaScript program to check whether elements exist in an array or not

// let arr2 = [1,2,3,4];
// let exist = 3
// if(arr2.indexOf(exist)!= -1){
//     console.log("Element exists in array");
// }else{
//     console.log("Element does not exist in array");
// }


// // Write a JS program to delete all occurrences of element 'num' in a given array.Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [5, 9, 3, 6, 8, 3, 2, 4, 6, 2 ,6, 6];
// let num = 6;
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === num) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

// // Write a JS program to find the no of digits in a number.Example : if number = 287152, count = 6

// let number = 1847494;
// let count = 0
// let copy = number;
// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count)

// // Write a JS program to find the sum of digit of the number

// let number = 1847494;
// let sum = 0
// let copy = number;
// while(copy>0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }

// console.log(sum)

// // Print the factorial of a number n.[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ]
// // Example :7! (factorial of 7) = 1x2x3x4x5x6x7 = 50405! (factorial of 5) = 1x2x3x4x5 = 1203! (factorial of 3) = 1x2x3 = 60! Is always 1

// let n = prompt("Enter the number : ");

// let factorial = 1;

// for(let i = 1;i<=n;i++){
//     factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`)

// Find the largest number in an array with only positive numbers

let arr = [2,5,10,4,2,7,1,9];
let large = 0;

for(let i = 0;i<=arr.length;i++){
    if(large<arr[i]){
        large = arr[i];
    }
}
console.log(large)