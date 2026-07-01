const detail = {
    Name : "Aditya Chauhan",
    Rollno : 58987,
    Course : "Btech",
    Year : "3rd",
    GPA : 9.65
}

console.log(detail)

let item = {
    price : 100.00,
    discount : 50,
    color : ['red', 'green']
}

console.log(item)

const post = {
    username : "@Aditya1112006",
    content : "#javascipt learning",
    like : 100,
    repost : 8,
    tags : ['@javascript','@development']
}

console.log(post['like']);
console.log(post.content);

// if we store post.content in some variable then we will use [] rackets and then variable name
let rep = "repost";
console.log(post[rep]);


