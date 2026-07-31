let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console.log(winner, runnerup);

// Destructing (objects)

const student = {
    name: "karan",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "math", "science", "social studies"],
    username:
    "karan123",
    password:
    1234,
};
const { username: user, password: pass } = student;
console.log(user); //"karan123"