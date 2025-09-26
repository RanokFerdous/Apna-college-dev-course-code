

//topic: event argument

let btn =document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event);
    //when button click:
    // // this print below:
    // PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}

    console.log("button clicked");
});



///Topic: double click

//topic: event argument

// let btn6 =document.querySelector("button");

// btn6.addEventListener("dblclick", function(event){
//     console.log(event);
//     //when button click:
//     // // this print below:

// //     MouseEvent
// // isTrusted:true,
// // altKey: false,   bubbles: true,
// // button:0, buttons: 0, cancelBubble : false,
// // cancelable: true, clientX:93
// // clientY:97,composed: true  ......

//     console.log("button  double clicked");
// });
