let colorDiv = document.querySelector(".color_div");
let shapeDiv = document.querySelector(".shape_div");
let colorbtn = document.querySelector("#btn_color");
let shapebtn = document.querySelector("#shape_btn");

console.log(colorDiv);
 
const colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta',
    'lime', 'indigo', 'violet', 'gold', 'silver', 'teal', 'navy', 'maroon', 'olive', 'coral'
  ];
  
  const shapes = ["polygon(50% 0%, 0% 100%, 100% 100%)", "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)", "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)", "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)", "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)", "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)", "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)", "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)", "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)", "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)", "circle(50% at 50% 50%)", "ellipse(25% 40% at 50% 50%)"];

  colorbtn.addEventListener("click", ()=>{
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDiv.style.backgroundColor = randomColor;
  });

  shapebtn.addEventListener("click", () => {
    let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDiv.style.clipPath = randomShape;
  });