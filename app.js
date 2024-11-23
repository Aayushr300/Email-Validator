console.log("This is my script");

const resultCont = document.getElementById("resultCont");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    resultCont.innerHTML =  `<img src="image/load.svg" alt=""></img>`;
    let key = "ema_live_64O5eLvw02YWpuCjHa0rNg5KgYKndyJcSa943L8M";

    let email = document.getElementById("username").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    try{
    let res = await fetch(url);
        if(!res.ok ){
            throw new Error(res.statusText);
        }
    
    let data =  await res.json();

    let str = ``
    for (let key of Object.keys(data)) {
        str += `<div>${key}: ${data[key]}</div>`;
    }

    resultCont.innerHTML = str;
}
    catch(error){
        console.log('There is a problem');
    }

    //resultCont.innerHTML = "";
});








