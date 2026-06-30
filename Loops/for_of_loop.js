// Array example
let cars = ["Porche", "Lamborgini", "BMW", "Ferari", "Mustang", "Tesle"];

for(car of cars){
    console.log(car);
}

// String example

for(bikes of "Royal Enfield"){
    console.log(bikes);
}



// Nested for of loop

let heroes = [["iron man", "spider man", "thor"], ["superman", "wonder women", "flash"]];

for(hero of heroes){
    for(power of hero){
        console.log(power);
    }
}