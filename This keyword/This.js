const Info = {
    name : "Aditya",
    age: 20,
    eng : 95,
    math : 93,
    phy : 97,
    getavg(){
        let avg = (this.eng + this.math + this.phy)/ 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

Info.getavg();