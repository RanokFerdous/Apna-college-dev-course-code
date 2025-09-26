//for multiple button click

// let btns= document.querySelectorAll("button");

// for( btn of btns){
//   btn.onclick=sayHello;
// }

// function sayHello (){
//     alert("hello bro !");
// }


//=======================================
//for hover print js part:
// let btns1= document.querySelectorAll("button");

// for( btn of btns1){


//     btn.onmouseenter= function (){
//         console.log("you entered a button  using mouseeneter. ");

// // NOTE: when the mouse cursor will be hover on the button ,
// // Then you entered a button will be printed
//     }
//     console.log(btn);
// }

//=========================
// Even Listener : addEvenListener
//syntax:
// Element.addEventListener ( event, callback)



let btns3 = document.querySelectorAll("button");

// loop through all buttons
for (let btn3 of btns3) {
    // attach multiple event listeners to each button
    btn3.addEventListener("click", sayHello);
    btn3.addEventListener("click", sayName);
}

// function 1
function sayHello() {
    alert("hello, I alert you.");
}

// function 2
function sayName() {
    alert("ranok my name.");
    console.log( "i am ronk . ");
}


//=========================================
// Even Listener : addEvenListener
// syntax:
// Element.addEventListener ( event, callback)


// let btns4 = document.querySelectorAll("button");

// // loop through all buttons
// for (let btn5 of btns4) {
//     // run this when button is double-clicked
//     btn5.addEventListener("dblclick", function () {
//         console.log("you double clicked me!..");
//         sayName();
//     });
// }

// // function 2
// function sayName() {
//     alert("ranok my name.");
//     console.log("i am ronk.");
// }

// console o/p: you double clicked me!.. . i am ronk.
//======================
