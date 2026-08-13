let btn = document.createElement("button");
btn.innerText = "Click Me";

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
})

document.body.append(btn);

let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", function() {
    let value = input.value;

    value = value.replace(/[^a-zA-Z ]/g, "");

    input.value = value;
    h2.innerText = value;
});

// mouseout
const box = document.getElementById('box');
box.addEventListener('mouseout', () => {
    box.style.background = 'red';
});

// keypress
const inputField = document.getElementById('inputField');
inputField.addEventListener('keypress', (event) => {
    console.log(`Character pressed: ${event.key}`);
});

// scroll
window.addEventListener('scroll', () => {
    console.log(`Current vertical scroll position: ${window.scrollY}px`);
});

// load
window.addEventListener('load', () => {
    console.log('The entire page and all its resources are fully loaded.');
});
