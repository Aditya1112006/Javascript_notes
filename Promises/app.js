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

saveData("Mugiwara")
    .then(()=>{
        console.log("Promise was resolved");
    })
    .catch(()=>{
        console.log("Promise was rejected");
    })