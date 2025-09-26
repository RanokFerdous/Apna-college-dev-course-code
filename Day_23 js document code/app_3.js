// Generate color problem

// let btn0 =document.querySelector("button");

// btn0.addEventListener("click", function(){
//     console.log("generate random color");
// });

//==================
// js code for generate color:

// let btn =document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3= document.querySelector("h3");
//     let randomColor =getRandomColor();
//     h3.innerText=randomColor;

//     let div =document.querySelector("div");
//     div.style.backgroundColor =randomColor;
//     console.log("color updated");
// });

// function getRandomColor(){
//     let red= Math.floor(Math.random()*255);
//     let green= Math.floor(Math.random()*255);
//     let blue =Math.floor(Math.random()* 255);

//     let color =` rgb(${red},${green},${blue})`;
//     return color;
// }


//===============================
// select the button and the color box
const btn = document.getElementById("colorBtn");
const box = document.getElementById("colorBox");

// function to generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // red (0–255)
  const g = Math.floor(Math.random() * 256); // green (0–255)
  const b = Math.floor(Math.random() * 256); // blue (0–255)
  return `rgb(${r}, ${g}, ${b})`;
}

// add event listener to button
btn.addEventListener("click", function () {
    let h2= document.querySelector("h2");
    let randomColor =getRandomColor();
    h2.innerText=randomColor;
    h2.style.color="blue";

  const newColor = getRandomColor();
  box.style.backgroundColor = newColor;
  box.textContent = `This is your new color: ${newColor}`;
});
