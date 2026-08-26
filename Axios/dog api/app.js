let btn = document.querySelector("button");
url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() =>{
    let link = await getdog();

    let img = document.querySelector("#result");
    img.setAttribute("src", link);
})


async function getdog() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch{
        console.log("error 404");
        return "No match";
    }
}

