//  topic: this : learn about this peroperty .
let btn =document.querySelector("button");



btn.addEventListener("click",function (){
    console.log(this);
    //o.p: every time button click there will be print:
    // <button> click me! please </button>

    console.dir (this); // show all button property .(compressed sign) , some are:
    // button
    //  accessKey: "",
    //  ariaActiveDescendantElement : null,
    //  ariaAtomic : null,
    //  ariaAutoComplete :null
    //.......
    //......

    console.dir(this.innerText);
    //o.p: print  innerText which has in the button , here
    // click me! please.
    this.style.backgroundColor="blue";
    //op: button er background color now blue.



//      NOTE : when we use this
// When :  we want to print single event listener from the multiple
// Event listener or multiple objects.

})

//**** note we can use this property on element like: p, h1 ,h2, button,  or any other element.  */
