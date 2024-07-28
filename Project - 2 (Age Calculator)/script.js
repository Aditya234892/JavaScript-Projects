let date = document.querySelector("#input");
let btn = document.querySelector(".submitBtn");
let displayAge = document.querySelector(".change-age")
btn.addEventListener("click", () =>{
    let dateValue= date.value;
    let dateYear = dateValue.slice(0, 4);
    let currentYear = new Date().getFullYear();
    let age = currentYear - dateYear;
    displayAge.innerText = age;
});

date.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
    {
        btn.click();
    }
});