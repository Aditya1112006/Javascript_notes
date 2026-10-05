class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

let p1 = new Person("Aditya", 20);
console.log(p1);
console.log(p1.talk());