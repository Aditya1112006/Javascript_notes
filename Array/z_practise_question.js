let start = ['january', 'july', 'march', 'august'];
start.shift();
start.shift();

start.unshift('june');
start.unshift('july');

let final = start;
console.log(final);

// 2nd
let language = ['c', 'c++','html', 'javascript', 'python','java', 'c#', 'sql'];

let reversed_language = language.reverse();
console.log(reversed_language);
console.log(reversed_language.indexOf('javascript'));

// Create a nested array to show tic tac toe game state

let arr = [['X', null, 'O'],
            [null, 'X', null],
            ['O', null, 'X']];
console.log(arr);

arr[0][1] = 'O';
console.log(arr);