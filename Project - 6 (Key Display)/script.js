let initial_text = document.querySelector('.initial_text');
let key_pressed = document.querySelector('.key_pressed');
let key_name = document.querySelector('.key_name');
let key_code = document.querySelector('.key_code');

console.log(key_pressed);

document.addEventListener('keydown', function(e){
    initial_text.style.display = "none";

    key_pressed.style.display = "block";
    key_name.innerText = e.key;
    
    key_code.style.display = "block";
    key_code.innerText = e.keyCode;

});