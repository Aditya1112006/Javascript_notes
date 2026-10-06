class Person{
    constructor(name, college){
        this.name = name;
        this.college = college;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}
class Student extends Person{
    constructor(name, college, age){
        super(name, college);
        this.age = age;
    }
}

class Teacher extends Person{
    constructor(name, college, subject){
        super(name,college);
        this.subject = subject;
    }
}

let s1 = new Student("Khushbu", "Shoolini Univsersity", 20);
let t1 = new Teacher("Harshita Mam", "Shoolini University", "Java");

console.log(s1);
console.log(t1);