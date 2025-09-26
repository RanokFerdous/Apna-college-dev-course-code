
// Question : we want when we click any text on the page then it's color will Be changed  into blue .

// Process 1:  select all tag indivisually
let btn =document.querySelector("button");
let p = document.querySelector("p");
let h1=document.querySelector("h1");
let h3 = document.querySelector("h3");

// work
btn.addEventListener("click",function(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
});

//note : now use same for diff element.
p.addEventListener("click",function(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
});

// remove reduncy using function .
function changecolor (){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

h1.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
//=====================
