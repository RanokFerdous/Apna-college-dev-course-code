// function

function  hello(){
    console.log("hello");
}

hello();   //calling the function

hello();
hello();
hello();


function printName(){
    console.log("Ranok Ferdous");
    console.log("super 30")
}

printName();
printName();

function print1_to_5 (){
    for(let i=0;i<5;i++){
        console.log(i+1);
    }
}

print1_to_5();

function isAdult (){
    let age=18;
    if( age>=18){
        console.log("Yes. adult")
    }
    else {
        console.log("Not adult")
    }
}

isAdult();

////
///////

//class 2: create a poem

function  printPoem (){

    console.log("Twinkle twinkle, little star");
    console.log("how i wonder what you are !");
}

printPoem();

//class 3: create a function when play dice  & always displaly the value of the idce 1 to 6


function rollDice (){

let rand = Math.floor (Math.random()* 6) +1;
console.log(rand);
}


rollDice();
rollDice();
rollDice();


// class 4:  function with argument

function printname (name){
    console.log(name);
}


printname("Ranok");



function  printinfo(name1,age){
    console.log(`${name1}'s age is ${age}`);
}

printinfo("sharda",26);

printinfo("ranok",22);
printinfo("karan");

//o.p: karan's age is not defined.

printinfo(14);
// karan's age is not defined.  take input as order.


function sum ( a, b){
    console.log( "the sum is: " ,a+b);
}

sum(3,2);
sum(4,9);



//class 5: create a function for calculate average of 3 number.

function calcAvg(a,b,c){
    // console.log((a+b+c)/3);

    let avg =(a+b+c)/3;
    console.log(avg);
}

calcAvg(2,4,5);
calcAvg(4,6,8);

function printTable (n){
    for( let i=1;i<=10;i++){
        console.log(i*n);
    }
}

printTable(5);


///////////////////////
///////////////////////

//class 7: return keyword

function sum1( a,b ){

    return a+b;
}

let s=sum1(3,4);
console.log(s);

//give answer: 7
console.log(sum1(7,8));
//15

console.log(sum1(sum1(1,3),7));
//11


//after return we can't print anything
function sum2( a,b ){
console.log("hello");
console.log("hello");
    return a+b;
    console.log("hello");
    console.log("hello");
}

console.log(sum2(65,45));



//class:8 return sum from 1 to n;
function getSum(n){
    let sum=0;

    for( let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}



//***********class :9 concatenation

let str=["hi","hello","bye","!"];

function concate(str){
    let result="";

    for( let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

let x= concate(str);
console.log(x);



//class : 10 what is scope ? **********vip class

let sum=54;  //global scope.

function calSum (a,b){
    let sum =a+b;
    console.log(sum);  //functin scope.
}

calSum(1,2);  // 3

console.log(sum);  // ans: 54


//class 13:  practice question*****************


let greet="hello"; //global scope

function changeGreet (){
    let greet ="namaste";  // function scope
    console.log(greet);  //o/p: namaste

    function innerGreet(){   // this function can't execute becaue this line can't call anytime.

        console.log(greet);  //
    }
}
