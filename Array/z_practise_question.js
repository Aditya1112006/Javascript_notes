// let start = ['january', 'july', 'march', 'august'];
// start.shift();
// start.shift();

// start.unshift('june');
// start.unshift('july');

// let final = start;
// console.log(final);

// // 2nd
// let language = ['c', 'c++','html', 'javascript', 'python','java', 'c#', 'sql'];

// let reversed_language = language.reverse();
// console.log(reversed_language);
// console.log(reversed_language.indexOf('javascript'));

// // Create a nested array to show tic tac toe game state

// let arr = [['X', null, 'O'],
//             [null, 'X', null],
//             ['O', null, 'X']];
// console.log(arr);

// arr[0][1] = 'O';
// console.log(arr);

// check whether all numbers in the array multiple of 10 or not

let num = [20,34,40,23,100,230,23];
let num2 = [20,340,40,3040,100,230];

let multiple = num.every((el) => el%10==0)
let multiple2 = num2.every((el) => el%10==0)

console.log(multiple);
console.log(multiple2);

// create a function to find the minimum number in the array

let array = [4,6,2,8,5,4,5,9];

let min = array.reduce((min,ele)=>{
    if(ele<min){
        return ele;
    }else{
        return min;
    }
})

console.log(min)