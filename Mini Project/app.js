let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

function addItem(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn)
}

btn.addEventListener("click", addItem);


inp.addEventListener("keydown", function(e){
    if(inp.value !== ""){
        if(e.key === "Enter"){
        addItem();
        }
    }
});

ul.addEventListener("click", function(e){
    let listItem = e.target.parentElement;
    listItem.remove();
})