// Day_19 js part_6

//topic: funtion , function with argument, return keyword,
// Topic: what is scope? block scope, Lexical scope,
// Topic: function expression ,
// topic: Higher order Function ,higher order function ( return )
// Topic: methods

//topic: 01 function

//function defination
//syntax: function functionName() {   // work
//        }

function hello() {
    console.log("hello");
}

//function call : functionName();
hello();

function print1_to_5(){
    for( let i=1;i<=5;i++){
        console.log(i);
    }
}

print1_to_5();
//======
function printPoem(){
    console.log("Twinkle twinkle, little start");
    console.log("How i wonder what you are !");
}

//quest: play dice
function rollDice (){
    let random_dice_value= (Math.floor(Math.random()*10)) +1;
    console.log(random_dice_value);
}
//=======================

//Topic:02 function wiht argument
//syntax: function functionName ( arg1,arg2,...) {   }

function printName (name){
    console.log(name);
}

printName("ranok");

//=======
function printInfo ( name1,age){
    console.log(`${name1}'s age is ${age} years old.`);
}

printInfo("ranok", 22);
printInfo("karan");

//o.p: Karan's age is not defined.
//==========
printInfo(14);
// o.p: age is not define , take input as order.

//queston: give avg of 3 value

function calcAvg( a, b,c){
    let avg=( a+b+c)/3;
    console.log(avg);
}
calcAvg(2,5,9);

//===========================
//Topic: Return

//NOTE: ** return keyword is used to return some value from function .

//input ---------> function ( do some work)-----> output.

//syntx:
// function functionName ( arg1,arg2,...){
//     //do something
//     return Val;
// }

// ***example 1: use return keyword in function

function sum1 (a,b){
    return a+b;
}
let sum= sum1(4,6);
console.log(sum);

//============
//NOTE: ** after return we can't print anything.
function sum2 (a,b){
    console.log( "hello");
    console.log("hello");
    return a+b;
    console.log("wonder");
    console.log("boy");
}

let summation =sum2(4,54);
//==========

//question: 1. return sum 1 to n .
function getSum(n){
    let sum =0;
    for( let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log( getSum(4));  //10
//==========
//question: 02  create a function that returns the concatenation of all strings in an array.

let str =['hi','hello', 'bye','!' ];
function  concat( str){
    let result="";

    for( let i=1;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

console.log( concat(str)); // hihellobye!
//=================

//topic: scope

//what is scope :
//ans: scope determines the accessibility of variable, objects and functions from  different parts of the code.
// 3 type : i) function scope, ii) block scope, iii) Lexical scope

//i ) function scope example:
// => variable defined inside a function are not accessible ( visible) from outside the function  .

function calSum( a,b){
    let sum= a+b;
}
calSum(1,2);
 //wrong: console.log(sum);
// o/p:  Error
// Because sum is  creted among calSum function
//  So it can't use outside the scope.
//======================

//example: 02

let sum3 =59; //Global scope
function calSum1 ( x,y){
    let sum3 = x+y;
    //function scope variable sum3.
    console.log(sum3); // 9 function scope
}

calSum1(4,5);
console.log(sum3); //59

//====================
//Topic: block scope -> variable declared inside a block can't access outside the block.

//note: Var : has no block scope.   Let: has block scope

{
    let a=34;
    //or
    const c=36;
}
 //console.log( a) ; //give error . a is not define.
  //console.log( c) ; //give error . c is not define.

 {
    var b= 44;
 }
 console.log(b); // o.p: 44

 //block scope example:
 for( let i=1;i<=5;i++){
    console.log(i);
 }

 // console.log(i); // error: i is not define.
 //------------

 let age=23;
 if( age>18){ let str ="adult"; }
 //console.log(str); ->error: str not define.
 //=============

 //Topic: **Lexical Scope : a variable defined outside a function can be accessible inside another function defined after the variable declaratioin .
 // the opposite is not : true.


function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();  //
}

console.log(outerFunc()); //5 6  undefined

//---------
function outerFunc1(){

    function innerFunc1(){
        console.log(x);
        console.log(y);
    }

    let x=5;
    let y=6;
      innerFunc1();
}
console.log(outerFunc1());
//o.p: 5 6 undefined

//sir:
//=====================
// (inner variable can't accsi   ble in outer,
// But outer variable accsibble in inner   in javascript)'

//example: 03

function outer(){
    let p=4;
    let q=9;
    function inner(){
        let a=10;
        console.log(p);
        console.log(q);
    }
    //console.log(a) ; -> error
    inner();  // undefined
}
console.log(outer()); //o.p: 4 9 undefined .

//  We can't call inner function :  **************
//  Because :  NOTE: here p,q can't use outside the fucntion
// Same::  inner() , can't use outside the outer()
//======================

//question : what will be output?

let  greet ="hello";
function changeGreet (){
    let greet ="namaste";
    console.log(greet);
//innerGreen  function can't run anytime  . Because this
//Function can't call here.
    function innerGreen(){
        console.log(greet);
    }
}

console.log(greet); // hello
changeGreet(); // namaste
//innerGreen(); // wrong

//===============

//topic: Lexical scope: call innerGreet function
let  greet1 ="hello";  // global scope
function changeGreet1 (){
    let greet1 ="namaste";
    console.log(greet1);
//innerGreen  function can't run anytime  . Because this
//Function can't call here.
    function innerGreet(){
        console.log(greet1);
    }
    // lexical scope
    innerGreet();
}

console.log(greet1); // hello
changeGreet1(); // namaste  namaste

//==================

//topic:   new topic: function expression ( nameless function )
//work: syntax:
// const variable =function (arg1,arg2...){  // do something}

const sum5  =function (a,b){
    return a+b;
}
sum5( 3,6);
// wrong : a ,b not define. console.log( sum5(a,b));
console.log(sum5(5,6));  // ans: 11
//t is nameless function . Where no have name
 //But it's value store  in a variable.

 let hello2 =function (){
    console.log("hello");
 }
hello2();  // hello
//===========


//  if two function same name , then below function will be call;
//example of same name 2 function  call.

let  hifi =function(){
    console.log("HIFI friend");
}

// update the hifi function

hifi =function(){
    console.log("update hif ,friend");
}

hifi();  // o.p: update hifi,friend.


//=======================

// topic: Higher order Function
// => A function that does one or both:
// i) takes one or multiple functions as arguemnt.
// ii) return a function.

// example: take one or multiple argument.

function multipleGreet1 ( func, n){
    for( let i=1;i<=n;i++){
        func();
    }
}
let greet10 =function (){
    console.log("hello bro /darling/sweet heart/ panda");
}
multipleGreet1( greet10,2); //  print 2 times : hello bro...

//multipleGreet1(function(){ console.log("namaste" )}, 1000);
//print : 1000 times , namaste .
//===============

//Topic: higher order function ( return  a function )

//oddEvenTest

function oddEvenTest ( request){
    if( request =="odd") {
        return function (n) {
            console.log(!(n%2==0));
        }
    }else if( request=="even"){
        return function (n){
            console.log(n%2==0);
        }
    }else {
        console.log("wrong answer.");
    }
}
// oddEvenTest is factory function ,detect for odd or even.
// two way to call function .
// 1st way: save return function into variable.
const isOdd = oddEvenTest("odd");   // returns the odd-checking function
isOdd(5); // true → logs: true
isOdd(6); // false → logs: false

const isEven = oddEvenTest("even"); // returns the even-checking function
isEven(4); // true → logs: true
isEven(7); // false → logs: false


//2nd way:  for call the function : call it immediately ( function chaining)
oddEvenTest("odd")(5);   // logs: true
oddEvenTest("odd")(10);  // logs: false

oddEvenTest("even")(8);  // logs: true
oddEvenTest("even")(13); // logs: false

//========================
oddEvenTest("hello"); // logs: wrong answer.
//======

//Topic: **** detect even number;
let even =function (n){
    console.log( n%2==0);
}
console.log( even(4)); // true undefined
console.log(even(5));// false undefined.

//==============
let even1 =function (n){
    console.log(n%2==0);
}
console.log( even1(4));  // true undefined
console.log(even1(5));// false undefined
//===========

// topic: Input code:
 //Custom function for dectect  odd ,even number:

 function oddEvenFactory ( request ){
    if ( request=="odd"){
        let odd =function (n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if( request =="even"){
        let even =function (n){
            console.log( n%2==0);
        }
        return even;
    }else {
        console.log("wrong request.");
    }
 }

 // how to call this?
 // store return function in a variable
 const oddChecker = oddEvenFactory("odd");
oddChecker(5);  // true → logs: true
oddChecker(10); // false → logs: false

const evenChecker = oddEvenFactory("even");
evenChecker(4); // true → logs: true
evenChecker(7); // false → logs: false

//2. Call immediately (chaining)
oddEvenFactory("odd")(7);   // logs: true
oddEvenFactory("odd")(12);  // logs: false

oddEvenFactory("even")(8);  // logs: true
oddEvenFactory("even")(13); // logs: false

//================

// topic: *** create function for object.

const calculator = {
    num: 44,
    add: function( a,b){
        return a+b;
    },
    sub: function ( a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
};

console.log(calculator.num);  // ans: 44
console.log(calculator.add(1,5)); //ans: 6
//============

// practice question
//quest 01: return the number which is larger than a number

let arr=[8,5,3,7,1,5,7];
let number2=5;

function getElements ( arr, num){
    for ( let i=0;i<arr.length;i++){
        if( arr[i]>number2){
            console.log( i , arr[i]);
        }
    }
}
getElements(arr,number2);

//===================
// quest: 02: Extract unique characters from a string.

function getUniqueString(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) === -1) {
            ans += currChar; // add only if not already present
        }
    }
    return ans;
}

// Example usage:
let stri = "abcdabcedgege";
console.log(getUniqueString(stri));
// Output: "abcdeg"

//======================
//ques 03: return longest country name from an array

let country =["Australia", "Germany","united states of US"];

function longestName (country){
    let ansIdx=0;
    for( let i=0;i<country.length;i++){
        let ansLen =country[ansIdx].length;
        let currLen = country[i].length;

        if( currLen > ansLen){
           // ansLen= currLen;
            ansIdx=i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));
// o.p:united states of US
//======================


// ques 4: count vowels from a string

let text = "5minutes school";

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) == "a" || str.charAt(i) == "e" ||
            str.charAt(i) == "i" || str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(text)); // Output: 5

//=========

// ques 5: Generate random number
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start; // find the range size
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start, end));
//all between 100 and 199.
//==============
