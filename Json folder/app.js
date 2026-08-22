let val = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.", "length":78}';

let validres = JSON.parse(val);

console.log(validres);
console.log(validres.fact);

let student = {
    name : "Aditya",
    rollno : 21
}

let json = JSON.stringify(student);
console.log(json);