console.log([1,2,3,4].reduce((acc,res) => acc + res));

let num = [3,4,2,4,5];
let cal = num.reduce((ecc, result) => {
    console.log(ecc);
    return ecc+ result;
})
console.log(cal);

// maximum using reduce

let arr = [4,5,2,6,8,1];

let max = arr.reduce((max, ele)=>{
    if(max<ele){
        max = ele;
    }
    return max;
})

console.log(max);