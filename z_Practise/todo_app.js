let prompt = require("prompt-sync")();

let todo = [];
console.log("-----------TODO LIST-----------");
console.log("1. Add")
console.log("2. List")
console.log("3. Delete")
console.log("4. Quit")
let req = prompt("Enter the request : ");

console.log(req)

while(true){
    if(req == "quit" || req == "Quit"){
        console.log("Quitting app");
        break;
    }
    if(req == "list" || req == "List"){
        console.log("-------------")
        for(let i = 0; i<todo.length;i++){
            console.log(i+1, todo[i]);
        }
        console.log("-------------")
    }else if(req == "add" || req == "Add"){
        let input = prompt("Enter the task : ")
        todo.push(input);
        console.log("Task added");
    }else if(req == "delete" || req == "Delete"){
        for(let i = 0; i<todo.length;i++){
            console.log(i+1, todo[i]);
        }
        let idx = prompt("Enter the number of the task to be deleted : ");
        if(idx>=1 && idx <= todo.length){
            let del = todo.splice(idx-1,1);
            console.log("Task deleted");
        }else{
            console.log("Invalid index");
        }
    }else{
        console.log("Invalid request!!")
    }
    req = prompt("Enter the request : ");
}