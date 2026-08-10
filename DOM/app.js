// Inner text gives us the content that is shown on the live server screen.
// Inner HTML gives full html markup
// Text content gives us the content which we have written inside the html file.

let para1 = document.createElement("p");
para1.innerText = "Hey, i am Spidey";

document.querySelector("body").append(para1);
para1.classList.add("red");

let head1 = document.createElement("h3");
head1.innerText = "Hey, I am captain";
document.querySelector('body').append(head1);

head1.classList.add('blue');

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "Hey, what's up";
para2.innerText = "Me too!";

div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector('body').append(div);
