let url = "https://catfact.ninja/fact"

fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log(data2.fact);
    })
    .catch((err)=>{
        console.log(err);
    })

// using async and await

async function catfact() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }catch{
        console.log("Error 404");
    }
}

console.log(catfact());