let colour = "red";
if (colour == "red"){
    console.log("Stop");
}
if (colour == "yellow"){
    console.log("Get Ready");
}
if (colour == "green"){
    console.log("Go");
}


let size = "small";
if(size == "small"){
    console.log("The price is 50");
}
else if(size == "medium"){
    console.log("The price is 100");
}
else if(size == "large"){
    console.log("The price is 200");
}
else if(size == "extra large"){
    console.log("The price is 250");
}

// A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not.

let str = "apple";

if (str[0] == "a" && str.length > 3){
    console.log("It is string is good");
}else{
    console.log("It is bad string");
}