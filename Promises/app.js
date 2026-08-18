function saveData(data){
    return new Promise((resolve, reject) =>{
        let internetspeed = Math.floor(Math.random()*10) + 1;
        if(internetspeed > 4){
            resolve("Data saved");
        }else{
            reject("Data not saved, Internet interrupted");
        }
    })
};
