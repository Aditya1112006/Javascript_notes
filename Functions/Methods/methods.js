const Calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
};

console.log(Calculator.add(5,8));
console.log(Calculator.sub(9,2));
console.log(Calculator.mul(5,8));
console.log(Calculator.div(27,3));


//// Shorthand method
// const Calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     },
//     div(a,b){
//         return a/b;
//     }
// };

// console.log(Calculator.add(5,8));
// console.log(Calculator.sub(9,2));
// console.log(Calculator.mul(5,8));
// console.log(Calculator.div(27,3));