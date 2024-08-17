let btn = document.querySelector('button');
let jokeDiv = document.querySelector('.jokes');
async function fetchData(){
    try{
    jokeDiv.innerHTML = `<h3>Daddy is making a joke for you, Please wait...</h3>`
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'text/plain'
        }
    });
    let data = await response.text();
    // console.log(data);
    updateDataOnUI(data);
    }
    catch(error){
        jokeDiv.innerHTML = '';
        jokeDiv.innerHTML = `<h1>An Error Occured, try again later!!</h1>`
    }
}

btn.addEventListener('click', (e)=>{
    fetchData();
    e.target.textContent = "Loding Dad's Joke!!";
    setTimeout(() => {
        e.target.textContent = "Click Me!!"
    }, 2200);
});

function updateDataOnUI(joke){
    // jokeDiv.innerHTML = '';
    setTimeout(()=>{
    jokeDiv.innerHTML = `<h2>${joke}</h2>`;    
    }, 1800);
}