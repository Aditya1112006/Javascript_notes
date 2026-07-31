let arr = [5,3,5,7,4,3,7,2,6,3,79,7,8,5,1];

console.log(Math.min(...arr));
console.log(...arr);

// spread with array literals

let array = [1,2,3,4,5];

let newArray = [...array]
console.log(newArray);
console.log(...newArray);

// spread with object literals

let data = {
    email : "psj1234@gmail.com",
    password : "psj1234"
}

let newData = {...data,id : 123};
console.log(newData);
