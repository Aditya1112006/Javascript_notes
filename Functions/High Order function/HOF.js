// HOF :-  High order function - Taking Functions as a argument in another function

function MultipleFunction(func, n){
    for(let i = 1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hallo!!")
}

MultipleFunction(greet, 3);