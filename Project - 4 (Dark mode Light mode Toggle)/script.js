let body = document.querySelector('body');
let btn = document.querySelector('.btn');
let icon = document.querySelector('.icon');
let h1 = document.querySelector("h1");
let changeContent = document.querySelector("span");
btn.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    icon.classList.add('animation');

    h1.classList.toggle('darkmode');
    
    if(body.classList.contains('darkmode'))
    {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        changeContent.innerText = '"Embrace The Light."'
    }
    else{
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
        changeContent.innerText = '"Unleash The Darkness."'
    }

    setTimeout( ()=> {
        icon.classList.remove('animation');
    }, 400)

});