console.log("Hallo!!");
console.log("Hallo!!");
// console.log(a);  // If we will not use try and catch then it will execute first two hallo's and will show error after that
try{ // If we use try and catch it will give us a msg on error and will execute all hallo's.
    console.log(a);
}catch{
    console.log("a is not defined");
}
console.log("Hallo!!2");
console.log("Hallo!!2");