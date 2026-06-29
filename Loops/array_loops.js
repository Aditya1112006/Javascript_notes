let bikes = ["Hunter350", "classic350", "Meteor350", "Continental GT 650", "Himalayan350"];
bikes.push("Bullet350");
for(let i = 0; i<bikes.length;i++){
    console.log(i, bikes[i]);
}


let heroes = [["iron man", "spider man", "thor"], ["superman", "wonder women", "flash"]];

for(let j = 0; j < heroes.length; j++){
    if(j==0){
        console.log("List #Marvel")
    }else if(j==1){
        console.log("List #DC")
    }
    for(k=0;k<heroes[j].length;k++){
        console.log(heroes[j][k])
    }
}