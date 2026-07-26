let sum = 54; //Global scope

function calSum(a,b){
    let sum = a+ b; // Function scope
    console.log(sum);
}

calSum(1,2);
console.log(sum);