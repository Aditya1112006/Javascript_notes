// Concatenate two or more string in one big string

let str = ["Hello, ","My ","name ","is ","john ","the ","don "];


function ConcatenateString(str){
    let result = "";
    for(let i = 0;i<str.length;i++){
        result += str[i];
    }
    return result;
}

console.log(ConcatenateString(str));