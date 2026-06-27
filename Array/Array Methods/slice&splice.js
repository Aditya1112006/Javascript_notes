let color = [ 'violet', 'green', 'orange', 'red', 'yellow', 'blue' ];

//slice
console.log(color.slice());

console.log(color.slice(2,4));

console.log(color.slice(-2));

//splice
console.log(color.splice(2));
console.log(color.splice(0,3));
console.log(color);

color.splice(0,0, "golden", "silver");
console.log(color);