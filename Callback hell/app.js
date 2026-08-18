let h1 = document.querySelector("h1");

function colorChange(color, delay, nextcolorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextcolorChange) nextcolorChange();
    },delay);
}

colorChange("red", 1000, () => {
    colorChange("blue", 1000, ()=>{
        colorChange("orange", 1000, ()=>{
            colorChange("green", 1000);
        });
    });
});