// topic: 02 onlick property

 let btn =document.querySelector("button");
  console.dir( btn);

btn.onclick= function (){
    console.log("button was clicked.");
    alert("button was clicked for alert show.");
}
// when button click this will be print.

//**** another way to use:  onlick as fucntion */

function sayHello (){
    alert("hello!");
}

btn.onclick= sayHello;

