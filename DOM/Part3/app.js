let btn = document.querySelector("button");

btn.addEventListener("click", function(e) {
    console.log(e);
    console.log("Single click");
});

btn.addEventListener("dblclick", function(e) {
    console.log(e);
    console.log("Double click");
});