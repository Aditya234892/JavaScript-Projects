let Bbtn = document.querySelector('.Bbtn');
let Dbtn = document.querySelector('.Dbtn');
let Fbtn = document.querySelector('.Fbtn');
let Tbtn = document.querySelector('.Tbtn');
let Bimg = document.querySelector('.Bimg');
let Timg = document.querySelector('.Timg');
let Dimg = document.querySelector('.Dimg');
let Fimg = document.querySelector('.Fimg');
let order = document.querySelector('.order');
let show = document.querySelector('.show_order');
let body = document.querySelector('body');
let msgs = document.querySelector('.msgs')

let cart = [];
Bbtn.addEventListener('click', () => {
  cart.push('Burger');
  console.log(cart);
  setTimeout(function(){
    Bbtn.textContent = "✅ Added";
  }, 100)

  setTimeout(function(){
    Bbtn.textContent = "Add again";
  }, 1800)
});

Dbtn.addEventListener('click', () => {
  cart.push('Drink');
  console.log(cart);
  setTimeout(function(){
    Dbtn.textContent = "✅ Added";
  }, 100)

  setTimeout(function(){
    Dbtn.textContent = "Add again";
  }, 1800)
});

Fbtn.addEventListener('click', () => {
  cart.push('Fries');
  console.log(cart);
  setTimeout(function(){
    Fbtn.textContent = "✅ Added";
  }, 100)

  setTimeout(function(){
    Fbtn.textContent = "Add again";
  }, 1800)
});

Tbtn.addEventListener('click', (e) => {
  cart.push('Taco');
  console.log(cart);
  setTimeout(function(){
    Tbtn.textContent = "✅ Added";
  }, 100)

  setTimeout(function(){
    Tbtn.textContent = "Add again";
  }, 1800)
});


order.addEventListener('click', (e)=>{
  if(cart == '')
  {
    let data = `<h1 style ="color: #502314">Add Something to cart first.</h1>`
    show.innerHTML = data;
    msgs.innerHTML  = '';
    return;
  }
  let Ddiv = '';
  let Bdiv = '';
  let Tdiv = '';
  let Fdiv = '';

  cart.forEach((ele) => {
    if(ele == "Burger"){
      Bdiv = `<div class="burger">
                    <img src = "images/burger.jpg">            
      </div>`;
      
    }
    if(ele == "Taco"){
      Tdiv = `<div class="burger">
                    <img src = "images/Taco.jpg">           
      </div>`;
      
    }
    if(ele == "Drink"){
      Ddiv = `<div class="burger">
                    <img src = "images/pomegranate.png">           
      </div>`;
      
    }
    if(ele == "Fries"){
      Fdiv = `<div class="burger">
                    <img src = "images/Fries.jpg">           
      </div>`;
      
    }
  });

  show.innerHTML = '';
  msgs.innerHTML  = '';


  setTimeout(function() {
    let data = `<h1 style ="color: #502314">Processing You Order...</h1>`;
    msgs.innerHTML += data;
  }, 1000);

  setTimeout(function(){
    msgs.innerHTML = '';
    let data = `<h2 style ="color: #502314">Your Order is Getting Ready</h2>`;
    msgs.innerHTML += data;
  }, 4000);

  let orderNumber = generateRandomNumber();

  setTimeout(function(){
    msgs.innerHTML = '';
    show.innerHTML += Bdiv + Tdiv + Ddiv + Fdiv;
    let msg = `<h1 id="msg-id" style ="color: #502314">
                        <i class="fa-solid fa-check-circle"></i>
                        Your order has been placed successfully. Your order number is <span>${orderNumber}</span>. Please check your email for further instructions.
                </h1>`;
    msgs.innerHTML += msg;
    cart = [];
  }, 6000);
});

function generateRandomNumber(){
  return Math.floor(Math.random() * 1000) + 1;
}


