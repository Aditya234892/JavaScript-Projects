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
// let item = document.querySelector('.item');
// let bag = document.querySelector('.added_items')
// let msg = document.getElementById('msg-id');
let msgs = document.querySelector('.msgs')
// console.log(document.querySelector('.show_order .msg'));
// let src = Timg.getAttribute('src');

// console.log(Bimg, Timg, Dimg, Fimg);
// console.log(Bbtn, Tbtn, Fbtn,  Dbtn);

let cart = [];
// let c = 0;
Bbtn.addEventListener('click', () => {
  cart.push('Burger');
  console.log(cart);
  setTimeout(function(){
    Bbtn.textContent = "✅ Added";
  }, 100)

  setTimeout(function(){
    Bbtn.textContent = "Add again";
  }, 1800)
  // c++;
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
  // c++;
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
  // c++;
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
  // c++;
});

// function notification(){
//   let bag = `<div class="added_items">
//   <p>Items added in Cart <span class="item">${counter}</span></p> 
// </div>`;

//   body += bag;
// }

order.addEventListener('click', (e)=>{
  if(cart == '')
  {
    let data = `<h1 style ="color: #502314">Add Something to cart first.</h1>`
    show.innerHTML = data;
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

  setTimeout(function(){
    msgs.innerHTML = '';
    show.innerHTML += Bdiv + Tdiv + Ddiv + Fdiv;
    // console.log(msg); 
    // msg.style.display = "block";
    let msg = `<h1 id="msg-id" style ="color: #502314">
                        <i class="fa-solid fa-check-circle"></i>
                        Your order has been placed successfully. Your order number is <span>4631</span>. Please check your email for further instructions.
                    </h1>`;
    msgs.innerHTML += msg;
  }, 6000);
});

