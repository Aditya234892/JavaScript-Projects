let plus = document.querySelector("#incrementbtn");
let minus = document.querySelector("#decrementbtn");
let result = document.querySelector("#result");

console.log(plus, minus, result);
let counter = 0;
 
plus.addEventListener("click", () => {
    counter++;
    result.innerText = counter;
});

minus.addEventListener("click", () => {
    if(counter > 0){
        counter--;
        result.innerText = counter;
    }
    else{
        minus.style.background = " rgb(228, 160, 160)";
    }
});