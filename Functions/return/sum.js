// Sum of numbers from 1 to n

function sumNum(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sumNum(5));