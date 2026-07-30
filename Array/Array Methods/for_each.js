let arr = [1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
})

// arr.forEach((el)=> el); // Using arrow function

// Taking objects

let obj = [{
        name : "Tobey maguire",
        Movies : ['Spider Man','Spider Man 2','Spider Man 3']
    }, 
    {
        name : "Andrew Garfield",
        Movies : ['The Amazing Spider Man ', 'The Amazing Spider Man 2']
    },
    {
        name : "Tom Holland",
        Movies: ["Spider Man : Homecoming", "Spider Man : Far from home", "Spider Man : No way home", "Spider Man : Brand New Day"]
    },];

obj.forEach( (info) => {
    console.log(info);
});