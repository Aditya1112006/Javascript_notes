let num = [2,3,6,8,7,32,23,54,66,54,43];

let prime = num.filter((el) => {
    for(let i = 2;i*i<=el;i++){
        if(el%i == 0){
            return false;
        }
    }return true;
})

console.log(prime);