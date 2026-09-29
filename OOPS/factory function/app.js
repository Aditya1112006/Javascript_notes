function personMaker(name, age){
    const person = {
        name : name,
        age : name,
        talk(){
            console.log(`My name is ${name} and I am ${age} years old.`);
        }
    }
    return person;
}

let p1 = personMaker("Pratham", 21);
let p2 = personMaker("Khushbu", 20);

console.log(p1.talk());
console.log(p2.talk());