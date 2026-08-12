let btn = document.querySelector("button");

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(e){
    console.log("code = ", e.code);
    if(e.code == "ArrowUp"){
        console.log("Character moves forward");
    }
    else if(e.code == "ArrowDown"){
        console.log("Character moves backward");
    }
    else if(e.code == "ArrowLeft"){
        console.log("Character moves left");
    }
    else if(e.code == "ArrowRight"){
        console.log("Character moves right");
    }
});