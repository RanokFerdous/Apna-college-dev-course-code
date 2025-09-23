//Day 20 js part_7
//topic: i) this  ii) Try and catch
//iii) Arrow function
//iv) implicit return in Arrow Function
//v) set TimeOut Function
//vi) Set Interval Function
//vii) this with Arrow function
//viii) Practice

// topic: this keyword
//-> "this" keyword refers to an object that is executing the current piece of code.

// const student ={
//     name:"shradah", age:23, eng:95,math:93,phy:97,
//     getAvg(){
//         let avg=(eng+math+phy)/3;
//         console.log(avg);
//     }
// }
// ans: this give error becuase not use this
// correct code: ( we have to use this keyword)

const student1 ={
    name:"shradah", age:23, eng:95,math:93,phy:97,
    getAvg(){
        console.log(this); // print all which is in this object student1.
        //console.log(this) → prints the entire object:
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
        console.log(`${ this.name} got avg marks = ${ avg} `);
        return avg;
    }
}

console.log( student1.getAvg());


//===================
//ouput:
// {
//   name: 'shradah',
//   age: 23,
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg: [Function: getAvg]
// }
// 95
// shradah got avg marks = 95
// 95

//================================
function getAvg(){
    console.log(this);
    // this refer to window object.
//      NOTE:
// All code are come in the window object.
//  Window object: higher level  a windows page a asa
}
//getAvg();
//***** This is print window. */
//op for this:

// Object [global] {
//   global: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   ...
// }
//=====================


//topic: 02 Try and Catch topic:
//Try: ** the try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement:  allows you to define a block of code to be executed , if an error occurs in the try block .

// try {
//     console.log(a);
// }catch{
//     console.log("variable a doesn't exist.");
//     //print : variable a doesn't exist. not give error,
// }

//when we use :  ** Try and catch
//  NOTE: when we work with API then  we have to use
// Try and catch  block  for handle error.
//  If we can't handle error ,then API will be crash
// And system will be gone.

//console.log(b); this gives error ,becuase not declare.

console.log("hello1");
console.log("hello2");
//console.log(c);
console.log("hello3");
console.log("hello 4");

//op: hello1 hello2  .
//==========
console.log("hello1");
console.log("hello2");
// console.log(c);
try{
    console.log(a);
}catch{
console.
log("catch an error......a is not defined.");
}
console.log("hello3");
console.log("hello 4");
//o:p:
// hello1
// hello2
// catch an error......a is not defined.
// hello3
// hello 4
//==========================

// ** this not give any error

console.log("hello1");
console.log("hello2");
let a=5;
try{
    console.log(a);
}catch{
console.
log("catch an error......a is not defined.");
}
console.log("hello3");
console.log("hello 4");

//o.p :
// hello1
// hello2
// 5
// hello3
// hello 4
//======================

// // class: 03 Miscellaneous Topics
//  Miscellanceous: means  small concept.
//  We learn now small concept of javascrits.

// topic: 03 Arrow Function

//syntax: const func =(arg1,arg2)=> {
               // function defination }
// NOTE:
//  1.arrow function are: nameless function.
//  2.not use function keyword.
//  3.
//  Direct wirte argument name.

    const sum = ( a,b)=> {
        console.log(a+b);
    }
    console.log(sum(4,2));  // ans: 6
    console.log(sum);
    //ans: undefined  [Function: sum]
//===========
// Topic: ** return arrow function
const cube= (n)=> {
    return n*n*n;
}
console.log(cube(3)); //ans: 27

const hello=( )=> {
    console.log("hellow world!");
}
hello();

//another example: arrow function

//================

// Topic: 4 ) Implicit return in Arrow function
//syntax: const func = (arg1,arg2,...) => ( value )

// Implicit return :
// 1.when we only return 1 value.
//  2.then don't need to right return
// 3.
//  { }  replace to () will be.
const mul1 =(a,b)=>(
    a*b )

console.log(mul1(4,2));  //ans: 8

//another implicit return  example:
const sum6 = ( a,b)=> ( a+b);
const pow =( a,b)=> a**b;
const hellow =()=> "hello dad";

console.log(sum6(34,4)); // ans: 38
console.log(pow(2,4));// ans: 16
console.log(hellow ());//ans: hello dad

//===============

// topic: 05 Set Timeout topic
// syntax: setTimeout( function , timeout)

//NOTE: ***When we want a work will be done in a fixed time which
//I set  , then we use it.It is an => window function .
 // here time : milesecond  ; 1000ms =1 sec.  4000ms= 4s.

 //code for example:
 console.log("hi there !");
 setTimeout ( ( )=> {
    console.log("5minutes school");
 }, 4000);

 console.log("welcome to");
 console.log("welcome to");
console.log("welcome to");
// o.p:  after 4s  5mi..line print.
//  hi there !
// welcome to
// welcome to
// welcome to
// 5minutes school
//=============

//=====topic: setInterval  ( function, timeout)
//code example:

// setInterval(( )=> {
//     console.log("china techgiant");
// }, 2000);
// ans: every 2s later , it print this.

//========================

// Topic: created id for setInterval:

// Topic: created id for setInterval:

/*
// interval 1
let id1 = setInterval(() => {
    console.log("for id1 setInterval use.");
}, 2000);
console.log("id1 =", id1);

// interval 2
let id2 = setInterval(() => {
    console.log("for id2 setInterval concept.");
}, 3000);
console.log("id2 =", id2);

// stop both intervals after 10 seconds
setTimeout(() => {
    clearInterval(id1);
    clearInterval(id2);
    console.log("✅ Both intervals cleared after 10s");
}, 10000);

*/


//***** question: how to stop print the given variable printed */
//NOTE *** use ->  clearInterval(.........)
//clear id1 and id2  and china Technique  part

//=============================

//class: 07 topic: this with Arrow function

//  NOTE:
// ***arrow function   i) lexical scope means  parents scope.
//  **** function scope this ===>  depand on calling object

//code: 1
const student3 ={
    name:"aman", marks:95, prop:this
};

console.log(student3); //{ name: 'aman', marks: 95, prop: {} }
//----------

//code: 02
const student4 ={
    name:"aman",marks:29,
    prop:this ,  // global scope
    getName: function (){
        return this.name;
    },
};

//console.log(student4);
//{ name: 'aman', marks: 29, prop: {}, getName: [Function: getName] }

console.log( student4.getName());
//{ name: 'aman', marks: 95, prop: {} }
//aman

//=================

//code 3:
const student5 ={
    name:"shardha",marks:94.4,
    prop:this ,  // global scope
    getName: function (){
        console.log(this);
        return this.name;
    },
    // create arrow function
    getMarks: ()=> {
        console.log(this); // p
        return this.marks;
    }
};

console.log( student5.getName());
//o:p:
// {
//   name: 'shardha',
//   marks: 94.4,
//   prop: {},
//   getName: [Function: getName]
// }
// shardha

console.log(student5.getMarks());  // undefined
// undefined: because -> it is a window function .
//  Because: in the arrow function this is not calling function
// . In arrow function this is => parent scope.
//  For this   function getMarks   =>>> parent  isStudent  .
// Student er scope is global.
// //===========

console.log("ok . ");

const student6 ={
    name:"shardha",marks:94.4,
    prop:this ,  // global scope
    getName: function (){
        console.log(this);
        return this.name;
    },
    // create arrow function
    getMarks: ()=> {  //
        console.log(this); // parent's scope
        return this.marks;
    },
    getInfo1: function (){
        setTimeout (() => {  // arrow
            console.log(this); //student object
        }, 2000);
    }, getInfo2: function (){
        setTimeout( function (){
            console.log(this); // window objects
        }, 2000);
    },
};

console.log(student6.prop);  //  {}
console.log(student6.getName());//
//{
//   name: 'shardha',marks: 94.4, prop: {},
//   getName: [Function: getName],
//   getMarks: [Function: getMarks],
//   getInfo1: [Function: getInfo1],
//   getInfo2: [Function: getInfo2]
// }
// shardha
 console.log(student6.getMarks());
 //  { }   ->
 // undefined -> return value.
 //=============================

student6.getInfo1();
console.log(" now info : 2 ");
// {
//   name: 'shardha',
//   marks: 94.4,
//   prop: {},
//   getName: [Function: getName],
//   getMarks: [Function: getMarks],
//   getInfo1: [Function: getInfo1],
//   getInfo2: [Function: getInfo2]
// }
//=====================

student6.getInfo2();

/*  answer:
{
  name: 'shardha',
  marks: 94.4,
  prop: {},
  getName: [Function: getName],
  getMarks: [Function: getMarks],
  getInfo1: [Function: getInfo1],
  getInfo2: [Function: getInfo2]
}
Timeout {
  _idleTimeout: 2000,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 60,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 8,
  [Symbol(triggerId)]: 1,
  [Symbol(kAsyncContextFrame)]: undefined
}
  */
//=============================

//===Practice question
//ques01: write an arrow function that returns the square of a number 'n'

//answer:

const square1=(n)=> { n*n }
console.log(square1(3)); // undefined.

//🔎 Why is it undefined?

//In arrow functions, when you use curly braces {}, you must explicitly write return.

//Otherwise, JavaScript thinks your function body is just a block of code (not an expression), so it returns undefined by default.

// ✅ Two correct ways:

//  way: 1: With explicit return:
const square2 = (n) => {
  return n * n;
};
console.log(square2(3)); // 9

// way 2: Without curly braces (implicit return):

const square =(n)=>  n*n;
console.log(square(4));  // 16

//rules:
// So the rule is:

// Curly braces {} → need return.

// No curly braces → auto-return
//=============

//question : 02 write a function that prints "hello world " 5 times at interval of 2s each.

//code:
function printHello() {
    let count = 0;

    let id = setInterval(() => {
        console.log("hello world");
        count++;

        if (count === 5) {
            clearInterval(id);
            console.log("✅ Done printing 5 times");
        }
    }, 2000);
}

// call the function
printHello();

/* answer:
hello world
hello world
hello world
hello world
hello world
✅ Done printing 5 times
*/
//=====================

console.log(" now recursive ");
//✅ Solution 2: Using recursive setTimeout
function printHelloRecursive(count = 0) {
    if (count === 5) {
        console.log("✅ Done printing 5 times");
        return;
    }

    console.log("hello world");
    setTimeout(() => printHelloRecursive(count + 1), 2000);
}

// call the function
printHelloRecursive();

//ans: same as before code.
//=====================

//Practice queston :
//quest1: write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

//ans:
const arrayAverage = (arr)=> {
    let total=0;
    for( let number of arr){
        total+=number;
    }
    return total/arr.length;
};

let arr=[ 1,2,3,4,5,6];
console.log(arrayAverage(arr));  // 3.5

//=============

//quest2: write an arrow function named isEven() that takes a single number as argument and return s if it is even or not.
//ans:

let num0 = 4;

// arrow function to check even
const isEven = (num0) => num0 % 2 == 0;

// test with console.log
console.log(isEven(num0));   // true, because 4 % 2 == 0
console.log(isEven(7));      // false, because 7 % 2 != 0
console.log(isEven(100));    // true
console.log(isEven(13));     // false

///============
