function saveData(data, sucess, failure){
    let internetspeed = Math.floor(Math.random()*10) + 1;
    if(internetspeed > 4){
        sucess(data);
    }else{
        failure();
    }
}

saveData("Mugiwara", (data)=>{
    console.log("Data saved ", data);
    saveData("Luffy", (data)=>{
        console.log("Data saved ", data);
        saveData("Roronoa",(data)=>{
            console.log("Data saved ", data);
            saveData("zoro", (data)=>{
                console.log("Data saved ", data);
            }, ()=>{
                console.log("Data is not saved. Internet is unstbale.")
            })
        }, ()=>{
            console.log("Data is not saved. Internet is unstbale.")
        })
    }, ()=>{
        console.log("Data is not saved. Internet is unstbale.")
    })
}, () => {
    console.log("Data is not saved. Internet is unstbale.")
})