let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let fact = await catfact();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function catfact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch{
        console.log("Error 404");
        return "No fact found";
    }
}

console.log(catfact());