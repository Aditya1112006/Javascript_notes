let gameSeq = [];
let userSeq = [];

let btns = ["brown", "orange", "red", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keydown", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }

})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200)
};

function levelUp(){
    userSeq =[];

    level++;
    h3.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}