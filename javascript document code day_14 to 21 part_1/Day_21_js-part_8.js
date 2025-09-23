// day_21 js part_8  ( Main Topic: Array)
//Topic: 1.Array Method 2. Map & Filter 3. Every & Sum 4. Reduce Method 5. Maximum in Array
// 6. Practice Qs. 7. Default Parameter 8. Spread 9. Spread ( array Literals)
// 10. Spread (object Literals ) 11. Rest  12. Destructuring. 13. Destructuring ( objects)

//Topic: 1 Array method: forEach , map, filter, some, every, reduce.

//forEach  example:

let arr=[1,2,,3,4,5];

function print ( el){
    console.log(el);
}

arr.forEach(print ); // 1 2 3 4 5
//or
arr.forEach (function (el){
    console.log(el); // 1 2 3 4 5
});

//==================================

//question: create object and print marks using for each loop:

let arr2=[
    {
        name: "aman",
        marks: 95,
    },
    {
        name:"shraksh ",
        marks: 94.4,
    },
    {
        name:"rajat", marks: 93,

    },
];

arr2.forEach((student )=> {
    console.log ( student.marks);
    // ans: 95 94.4 93
});

//============
//+++ Topic: Map ===========
//NOTE: Using map we can change every value of array and create a new array
 //syntax: let newArr =arr.map ( ...some function defination or name )

 let num =[1,2,3,4];

 let double =num.map ( function (el){
    return el*2;
 });
 console.log(double); //[ 2, 4, 6, 8 ]
//------------
 let tripple = num.map ( (el)=> {
    // not return anything.
 });

 console.log(tripple); //[ undefined, undefined, undefined, undefined ]
//-----------
let gpa =arr2.map ((el)=> {
    return el.marks /10;
});
console.log( gpa); //[ 9.5, 9.440000000000001, 9.3 ]
//-----------

//Topic: filter ->  return only those element which fuilfill the condition  .

//sytax: let newArr =arr.filter ( some function defination or name )

let numerical_num = [2,4,1,5,6,37,8,9];
let even= numerical_num.filter( (numerical_num)=> ( numerical_num%2==0));

console.log(even); //[ 2, 4, 6, 8 ]
//---------------another example

let ans =numerical_num.filter((el)=> {
    return el<5;
});

console.log(ans);  //[ 2, 4, 1 ]
//----------------

// Topic: 03 : Every : return true if every element of array gives
// true for some function .Else return false.

//syntax : array.every (some function defination or name)

let ar= [1,23,4,5]
ar.every ((el) => (el%2==0));
//console:  false
[2,4,6].every ((el)=> (el%2==0));
//console: true
//---------

// topoic : some: return true if some element of array gives true.

let ar1= [1,23,4,5]
ar1.some ((el) => (el%2==0));
//console: true

[1,3].some ((el)=>( el%2==0));
console.log( [1,3].some ((el)=>( el%2==0)));
//console: false

//---------------topic: reduce--------
//Reduce:  reduce the array to  into a single value .
// syntax: arr.reduce ( reducer function with 2 variables for ( accumulator, element));

[1,2,3,4].reduce ((res,ele)=> ( res+ele));
//console: 10
console.log( [1,2,3,4].reduce ((res,ele)=> ( res+ele)));  // ans: 10

//----------
let number_arr =[1,25,7,43];
let final_val = number_arr.reduce ((res,ele)=> res+ele);
console.log(final_val); //76
// here, at first res=0 , res+= ele;
//==============

//explain output:
let arrayIs = [1,2,4,5];
let finalValue =arrayIs.reduce((res,ele)=> {
    console.log(res);
    return res+ele;
});

console.log(finalValue);  // ans: 1 3 7 12
// Question:  console.log( res) ;  value are come
// Before it is calculated  using return res+el;
//------------------------

// Reduce:  question: find maximum in an array using Reduce

let num_array = [ 2,3,4,5,3,4,6,7,1,2];
let result = num_array.reduce (( max, ele)=> {
    if( ele>max) { return ele;}
    else { return max; }
});

console.log( result); //ans: 7
// Here, return value will be store every time accumulator.
// for this array: [ 1,2,3,1] . explain it works:
// ( max, ele)=> ( 0,0)
// ( 0,1) => 1
// ( 1,2)=> 2
// ( 2,3) => 3
// ( 3,1) -> 3 ,  return 3;
//---------

//---- practice question
//ques1 : check if all numbers in our array are multiple by 10 or not.
let no =[ 10,20,30,40];
let ans1= no.every ((el) => el% 10==0);
console.log( ans1); // ans: ture

// ques: 2: create function to find min number in an array

let min = no.reduce((min, ele) => {
    if ( min <ele) { return min;}
    else { return ele};
});
console.log( min); // 10
//-----------

// question : print max value using function .
function getMin(values4) {
    let mini = values4.reduce((mini, ele) => {
        if (mini < ele) {
            return mini;   // keep the smaller value
        } else {
            return ele;
        }
    });
    return mini;
}

let values4 = [34, 2, 4, 24, 3];
console.log(getMin(values4)); // 2

//--------------
//or use these for find min value:
function getMin(values4) {
    return values4.reduce((mini, ele) => (mini < ele ? mini : ele));
}
console.log(getMin(values4)); // 2
// or use this: Math.min
console.log(Math.min(...values4)); // 2

//-------------------


// Topic:  Default Parameter :
// give default value to the Ar{guments .
// syntax:  function func ( a,b=2) { // do somethings. }
// code:

function sum ( a, b=2){
    return a +b;
}
console.log( sum ( 3));  // ans: 5
console.log( sum ( 34,3)); //ans: 37

function sub ( a=3,b){
    return a-b;
}
console.log( sub( 5)); // NaN  becuase b is undefined
// here. not give any value of b here. here,a =5

console.log( sub( 5,2)); // ans: 03
//-------------------

// topic: spread ( use to see value separately )

//syntax:  function func ( ....arr) { // do somethings.  }

let a =[ 1,2,3,4,5];
console.log( Math.min( ...a)); // ans: 1
console.log( Math.max ( ...a)); // 5
console.log( ...a); //ans: 1 2 3 4 5
console.log( ..."5minutes school");
//ans: 5 m i n u t e s   s c h o o l

// We can write here:
//Math.min(arr[0],arr[1],arr[2],arr[3],,…………..arr[n-1])

let char ="hello";
let newArr = [...char];
console.log( newArr);  //[ 'h', 'e', 'l', 'l', 'o' ]
console.log( ...a, ...char); //1 2 3 4 5 h e l l o
//=============


// Topic: spread with object literals

let data ={ email: "batman@gmail.com", password: "abcd"};
let dataCopy = { ...data, id: 123};
console.log( dataCopy);
//{ email: 'batman@gmail.com', password: 'abcd', id: 123 }
//prototype: object .
//NOET: ****
// Here , object mush have to  key and value.
// In array since key is not present , so  index will be
// key and given data is  Value.

//Example:
let arr4 = [ 4,25,6,3,6]; //value
let obj1 = { ...arr4}; // obj -> key: val
console.log( obj1);
//ans: { '0': 4, '1': 25, '2': 6, '3': 3, '4': 6 }
//gives key with value here  in object.
//---------------

//Topic: 11. REST ( REST and spread are vice-versa).
//REST: ** Allows a function to take an indefinite
//  number of arguments and bundle them in an array .

//EXAMPLE : 01
function sum ( ...args){
    //arguments
    for ( let i=0;i<args.length;i++){
        console.log( "you gave us: ", args[i]);
    }
}
console.log( sum( 3,5,334)); //output:
// you gave us:  3
// you gave us:  5
// you gave us:  334
// undefined
//===========================

//example: 02 collect all value the arguments keyword
//✅ Correct version using function expression
const miniVai = function() {
    console.log(arguments); // arguments object
};

miniVai(3, 2, 54, 23);
//ans: [Arguments] { '0': 3, '1': 2, '2': 54, '3': 23 }
//---------
//✅ Correct version using arrow function

//⚠️ Note: arrow functions do not have their own arguments object.
//If you want arguments with arrow function, use rest parameter:

const miniVai1 = (...args) => {
    console.log(args); // real array
};

miniVai1(3, 2, 54, 23); //ans: [ 3, 2, 54, 23 ]

//-------------
//✅ Correct version using normal function
function miniVai2() {
    console.log(arguments); // Arguments object
    console.log( arguments.length);
    //arguements.push( 8); ->error: because Argument is collection
    // we can push , pop in stack , queue , not in collection .
    console.log( arguments[0]);//3
}

miniVai2(3, 2, 54, 23);
//[Arguments] { '0': 3, '1': 2, '2': 54, '3': 23 }
//==========

//**Example:3: using rest  */

function summation ( ...args){
    return args.reduce((summation,ele)=> summation + ele);
}
console.log( summation ( 1,2,3,4)); // ans : 10

// example: find min using  rest

function minifind ( msg, ...args){
    console.log(msg);
    return args.reduce((minifind,ele)=>{
        if( minifind>ele){
            return ele;
        }else {return minifind;

        }
    })
}
console.log( minifind( "hello",53,6,3,634,32));
//ans:  hello 3
console.log( minifind( 90,53,6,3,634,32));
//ans: 90 3
//===============


//Topic: Destructuring topic:
//🔹 What is Destructuring?

// Destructuring is a special syntax in JavaScript that lets you unpack values from arrays or properties from objects into separate variables in a clean and short way.

// Instead of manually assigning values one by one, destructuring allows you to do it in a single line.
// ===============================
// 1. Array Destructuring
// ===============================

// Example 1: Basic
let numbers = [10, 20, 30];
let [x, y, z] = numbers;
console.log("Array Basic:", x, y, z); // 10 20 30

// Example 2: Skipping values
let arra = [1, 2, 3, 4, 5];
let [first, , third] = arra;
console.log("Skip Value:", first, third); // 1 3

// Example 3: Default values
let arr22 = [100];
let [c = 1, b = 2] = arr22;
console.log("Default Values:", c, b); // 100 2

// Example 4: Rest operator
let arr3 = [1, 2, 3, 4, 5];
let [p, q, ...rest] = arr3;
console.log("Rest Operator:", p, q, rest); // 1 2 [3,4,5]

// ===============================
// 2. Object Destructuring
// ===============================

// Example 1: Basic
let person = { name: "Ranok", age: 22 };
let { name, age } = person;
console.log("Object Basic:", name, age); // Ranok 22

// Example 2: Renaming variables
let user = { id: 101, username: "ferdous" };
let { id, username: userName } = user;
console.log("Rename Var:", id, userName); // 101 ferdous

// Example 3: Default values
let person2 = { name: "Alice" };
let { name: n, age: ag = 18 } = person2;
console.log("Object Default:", n, ag); // Alice 18

// Example 4: Nested objects
let student = {
  id: 1,
  info: {
    name: "Rahim",
    grade: "A"
  }
};
let { info: { name: sName, grade } } = student;
console.log("Nested Object:", sName, grade); // Rahim A

// ===============================
// 3. Function Parameters with Destructuring
// ===============================

// Example 1: Array params
function sum10([a, b]) {
  return a + b;
}
console.log("Func Array Params:", sum10([5, 10])); // 15

// Example 2: Object params
function showUser({ id, name }) {
  console.log(`Func Object Params: ID=${id}, Name=${name}`);
}
let user2 = { id: 201, name: "Karim" };
showUser(user2); // ID=201, Name=Karim

// ===============================
// 4. Swap Variables with Destructuring
// ===============================
let m = 1, n2 = 2;
[m, n2] = [n2, m];
console.log("Swap Values:", m, n2); // 2 1

//============

//some example on : Destructuring .

//example: 01
let names =["toney","bruce", "steve", "peter"];
let [ winnder, runnerUp, ...others] =names;
console.log( winnder, runnerUp); // ans: "toney", "bruce"
console.log(others); //[ 'steve', 'peter' ]
//------

//example: 02 Destructuring => objects
//create an object and then retrive data from object to another variable .
const student10= {
    name: "karan", class:9, age:14, subject:["hindi", "english", "math", "sciecne", "social studies"],
    username: "karan123",
    password:1234,
};

// create another objcet for destructuring data another variable from student10 objects.

const { username: user10, password: pass, city = "beigin" } = student10;

// city is new object key which i created additionally.
console.log( user10,pass); // karan123 1234
//note: here, user10 replace to karan123 and pass replace to 1234.
//-------------

let username =student10.username;
let password = student10.password;

console.log( username); //karan123
console.log(password);//1234
console.log( city) ; // ans: beigin.
console.log( student10.age); //14
//----------------------------------

// js part8 practice question
//ques1 : square and sum the array  element using the  arrow function and then find the average of the array.

let nums =[ 1,2,3,4,5];
const square = nums.map (( num) => num * num );
// here,map create new array : square =[ 1,4,9,16,25];
console.log( square);

let sum11 = square.reduce (( acc, cur) => acc+cur, 0);

console.log( "sum:", sum11 ); //55
let avg =sum11/ nums.length;
console.log( avg); // 11

//=================
//ques 2: create a new array using the map function whose each element is equal to the original element plus 5.

let batValue =[ 4,5,2,9,8];

const  update_bat_value = batValue.map ( batValue=> batValue+5);
console.log( update_bat_value);

//ans: [ 9, 10, 7, 14, 13 ]
//===================================

//quest 03: create a new array whose elements are in uppercase of words present  in the original array.

let strings= [ "adam", "bob", "catlyn", "donald","Eve"];

console.log(strings.map((strings)=> strings.toUpperCase()));
//[ 'ADAM', 'BOB', 'CATLYN', 'DONALD', 'EVE' ]
//=========


//question: 04 : write a function called doubleAndReturnArgs whcih accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled .

//answer:
const doubleAndReturnArgs =(arr, ...args)=> [ ...arr, ...args.map((v) => v*2),];

console.log(doubleAndReturnArgs( [1,2,3],4,4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)); // [2,20,8];
//=============
/* Explaination of these 3 line:

(arr, ...args)
  =>    arr = the first argument (an array).

 =>    ...args = collects the rest of the arguments into an array.
Example:

doubleAndReturnArgs([1,2,3], 4, 4)
// arr = [1,2,3]
// args = [4, 4]

//----
args.map(v => v * 2)

Takes each extra argument and multiplies it by 2.
Example:

args = [4, 4]  →  map → [8, 8]
args = [10, 4] →  map → [20, 8]
//------
[...arr, ...args.map(...)]

...arr spreads the original array values.

...args.map(...) spreads the doubled arguments.

Then they are combined into one new array.
===== */


//Example 5;  write a function called mergeObjects that accepts two objects and returns a new object which contain all the keys and values of the first object and second object.

const mergeObjects = ( obj1,obj2)=> ({ ...obj1, ...obj2});

mergeObjects( { a:1, b:2,} , { c:3, d:4}); // { a:1,b:2, c:3, d:4}

// mergeObjects takes two objects (obj1, obj2).

// { ...obj1, ...obj2 } uses the spread operator to copy properties:

// First spread all properties from obj1

// Then spread all properties from obj2 (overwriting if keys match).
//=====================

// another way to answer:
function mergeObjects2(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };

console.log(mergeObjects2(objA, objB));
// { a: 1, b: 2, c: 3, d: 4 }
//==================

function mergeObjects3(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
const person = { name: "Rahim", age: 20 };
const update = { age: 22, city: "Dhaka" };

console.log(mergeObjects3(person, update));
// { name: "Rahim", age: 22, city: "Dhaka" }
