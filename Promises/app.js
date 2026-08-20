function saveData(data){
    return new Promise((resolve, reject) =>{
        let internetspeed = Math.floor(Math.random()*10) + 1;
        if(internetspeed > 4){
            resolve("sucess : Data saved");
        }else{
            reject("Failure : Data not saved, Internet interrupted");
        }
    })
};

saveData("Mugiwara") // Promise
    .then(()=>{
        console.log("Promise was resolved");
    })
    .catch(()=>{
        console.log("Promise was rejected");
    })

saveData("Mugiwara") // Promise Chaining
    .then(()=>{
        console.log("Data 1 : Promise was resolved");
        return saveData("luffy");
    })
    .then(()=>{
        console.log("Data 2 saved");
        return saveData("Roronoa ZORO");
    })
    .then(()=>{
        console.log("Data 3 was saved");
    })
    .catch(()=>{
        console.log("Promise was rejected");
    })