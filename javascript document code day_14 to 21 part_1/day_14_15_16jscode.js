
note part_3 all at a place  540+ line code: *****8

// part_3 js document file,
//topic:
//Topic: 1: string methods->action that can be performed on objects.

//format
//stringName.method()

stringName./**
 *
 */
name() {

}

//=========================
//###1. str.trim( )
let msg="   hello   ";
msg.trim();

let msg="   hello  ";
undefined
msg.trim()
'hello'
msg
'   hello  '
let name="ranok ferdous"
undefined
name.trim()
'ranok ferdous'
=============

##2. toLowerCase and toUpperCase
let str="Random String";
undefined
str.toUpperCase()
'RANDOM STRING'
str.toLowerCase()
'random string'
======
Topic: string methods with Arguments
> Argument is: a some value that we pass to the method.

Format:
stringName.method(arg)

================
###3.topic: indexOf => return the first index of occureance of some value in string . or gives -1

let str="ilove banana";

str.indexOf("love") ->  1
str.indexOf("j") -> -1
str.indexOf("a") -> 7

==================
### 4.method chaning
let str="Random String";
undefined
str.toUpperCase().trim()
'RANDOM STRING'
================
###5.slice method : Return a part of the original string as a new string.
let str="ilovecoding"
undefined
str.slice(5)
'coding'
str.slice(1,4)
'lov'
str.slice(-num)
'ilovecoding'
str.slice(length-num)
'ilovecoding'
str.slice(-1)
'g'

Str.slice( startIdx, endIdx);    endIdx not included….
 Answer : lov .. Not love.
 Or  str.slice(start);   // here assume end=str.length().
 Or  str.slice(-ve) ; means str.slice( str.length()-(ve));

 ===========

 Note: substring is almost similar to slice method but
some difference ..slice method is easier then substring
method.

======
###5. replace and repeat
let str="ilovecoding"
undefined
>str.replace("love","do");
<'idocoding'

##Repeat: Returns a string with the nmber of copies of a string.

str.Repeat(3);
'ilovecodingilovecodingilovecoding'

=======
### practice question :
let name="5minutes coding";

let name="5minutes coding";
undefined
name.slice(4,9)
'utes '
name.indexOf("na")
-1
name.replace("coding","funny")
'5minutes funny'
str.slice(9).replace('nn','o');
'ng'

NOTE: in js string are immutable . They can't change.
Always create new string and change them
================

topic: array ( data structure)
linear collection of things.

 ******Collection of  not same type of data  for
javascript.
 But in c++ same type..

 ====================
 array
 info
(5) ['aman', 25, 3.6, false, true]
0: "aman"
1: 25
2: 3.6
3: false
4: true
length: 5[[Prototype]]: Array(0)

info.length
5
info[0][0]
'a'
info[0][3]
'n'
let fruits=["mango","apple","litchi"]
undefined
fruits[0]
'mango'
fruits[0]="banana"
'banana'
fruits
(3) ['banana', 'apple', 'litchi']
fruits[10]="papaya"
'papaya'
fruits
(11) ['banana', 'apple', 'litchi', empty × 7, 'papaya']


==================

Topic:
push,pop  =>  for end operation
unshift, shift  => for start operation

fruits
(11) ['banana', 'apple', 'litchi', empty × 7, 'papaya']

fruits.push("tomato");
12

fruits
(12) ['banana', 'apple', 'litchi', empty × 7, 'papaya', 'tomato']

fruits.pop()
'tomato'

fruits
(11) ['banana', 'apple', 'litchi', empty × 7, 'papaya']

fruits.unshift("cucumber");
12

fruits
(12) ['cucumber', 'banana', 'apple', 'litchi', empty × 7, 'papaya']

fruits.shift()
'cucumber'

fruits
(11) ['banana', 'apple', 'litchi', empty × 7, 'papaya']

=================

topic: slice method: use for copy a protion of an array.
work:

< let colors=["red","yellow","blue","orange","pink","white"];
> undefined
< colors
> (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']

< colors.slice()
> (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
< colors.slice(2)
> (4) ['blue', 'orange', 'pink', 'white']
< colors.slice(2,3)
> ['blue']
< colors.slice(-2)
> (2) ['pink', 'white']
< colors.slice(colors.length-1)
> ['white']
< colors.slice(colors.length);
> []

colors.slice(-2) => colors.slice(colors.length() -2)
===============


Topic: splice
Note:  ( difference between slice and splice )

 slice can't change it's original array .
But splice change it's original array.

splice ( start,  deleteCount ,item0,,,,itemN )
...
colors=["red","yellow","blue","orange"]
(4) ['red', 'yellow', 'blue', 'orange']
colors
(4) ['red', 'yellow', 'blue', 'orange']
colors.splice(0,1)
['red']

colors
(3) ['yellow', 'blue', 'orange']

Question: colors.splice(0,1,"black","grey"); --?
 Means: starting idx is =0,  deleteCount or delete no of element =1, add
black and grey in delete place.

colors.splice(0,1,"black","grey");
['yellow']
colors
(4) ['black', 'grey', 'blue', 'orange']
cars=["audi",'bmw','xuv','marti']
(4) ['audi', 'bmw', 'xuv', 'marti']
cars
(4) ['audi', 'bmw', 'xuv', 'marti']
cars.splice(0,1)
['audi']
cars
(3) ['bmw', 'xuv', 'marti']
cars.push("maruti")
4
cars.push("ferrari")
5
cars
(5) ['bmw', 'xuv', 'marti', 'maruti', 'ferrari']
cars.splice(1,2);
(2) ['xuv', 'marti']
cars
(3) ['bmw', 'maruti', 'ferrari']
cars.splice(0,0,"toyota","xuv","honda");
[]
cars
(6) ['toyota', 'xuv', 'honda', 'bmw', 'maruti', 'ferrari']

question: Note: add element on
1 idx and doesn't delete  any element.
ans:
cars.splice(1,0,"mercedies","discovery");
[]
cars
(8) ['toyota', 'mercedies', 'discovery', 'xuv', 'honda', 'bmw', 'maruti', 'ferrari']

question:  Question : replace mercedes with gwagon
ans:
cars.splice(1,1,"gwangon")
['mercedies']
==================
=======================

Topic: sort in array

> let days=["monday","sunday","wednesday","tuesday"];
< undefined
> days
< (4) ['monday', 'sunday', 'wednesday', 'tuesday']
> days.sort();
< (4) ['monday', 'sunday', 'tuesday', 'wednesday']
> let squares=[25,43,6,3,53];
< undefined
> squares.sort()
> (5) [25, 3, 43, 53, 6]

=============================

practice question :
question : 1: For the given starts state of an array , change it to final form using splice

start: ['januaray','july','march','august']
final:['july','june','march','august']

ans:
month=['january', 'july', 'march', 'august']
(4) ['january', 'july', 'march', 'august']
month
(4) ['january', 'july', 'march', 'august']
month.splice(0,2,'july','june');
(2) ['january', 'july']
month
(4) ['july', 'june', 'march', 'august']

Question 02: return the index of the "javascript" from the given array, if it was reversed.

['c','c++','html','javascript','python','java','c#','sql']

ans:


=========
Topic: Array References : addrss in memory

NOTE: if both array References or address are same ,
then answer is : true.
when we copy array , then both array has same address.

[1]===[1]
false
[1]==[1]
false
[]==[]
false

here, [1] and [1] are not same address array.

"name"=="name"
true
"name"==="name"
true


let arr=['a','b']
undefined

let arrCopy=arr;
undefined
arrCopy
(2) ['a', 'b']
arrCopy==arr
true
NOTE: both array are addrss same.

arrCopy.push('c')
3
arrCopy
(3) ['a', 'b', 'c']
arr
(3) ['a', 'b', 'c']
arr==arrCopy
true

arrCopy.push('d')
4
arrCopy
(4) ['a', 'b', 'c', 'd']
arrCopy.pop()
'd'
arrCopy
(3) ['a', 'b', 'c']
===============
===========================

﻿Topic: constant array
﻿NOTE: Constant array:  in constant array we can push,
 Pop operation . But  we can't create new array
 With the  same constant variable.

< const arr1=[1,2,3,4]
> undefined
< arr1
> (4) [1, 2, 3, 4]
< arr1.push(8)
> 5
< arr1
> (5) [1, 2, 3, 4, 8]
< arr1.pop()
> 8
< arr1=[43,24,24,23]
VM2387:1 Uncaught TypeError: Assignment to
constant variable.
    at <anonymous>:1:5
(***wrong: because: arr1 is constant , we can't
declare another array in the same name like arr1)

< cars=["maruti","discovery","honda"]
>
<arr1=cars
=> worng , because arr1 is constant value.
ote: array address will be same always for
Constant array.
=================

Topic: Nested Arrays

2D Arrays
let nums=[[2,4],[3,6],[4,8]];
undefined
nums
(3) [Array(2), Array(2), Array(2)]
0 :  (2) [2, 4]
1: (2) [3, 6]
2: (2) [4, 8]
length: 3
[[Prototype]]: Array(0)

nums.length
3
nums[0][0]
2
nums[0].length
2

Question: create 3D Array
ans:
>let tictac_game_array=[['x',null,'0'],[null,'x',null],['0',null,'x']];
< undefined
> tictac_game_array
< (3) [Array(3), Array(3), Array(3)]
0: (3) ['x', null, '0']
1: (3) [null, 'x', null]
2: (3) ['0', null, 'x']
< length: 3
> [[Prototype]]: Array(0)

< tictac_game_array[0][1]='win';
>'win'

< tictac_game_array
> (3) [Array(3), Array(3), Array(3)]
0: (3) ['x', 'win', '0']
1: (3) [null, 'x', null]
2: (3) ['0', null, 'x']
length: 3
[[Prototype]]: Array(0)

====================

JS (Part 3) – Practice Questions

Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n=3
Print → [7, 9, 0]

Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
For example: for array [7, 9, 0, -2] and n=3
Print → [9, 0, -2]

Qs3. Write a JavaScript program to check whether a string is blank or not.

Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

Qs6. Write a JavaScript program to check if an element exists in an array or not.


answer:
// answer: 1 print 1st n element
let array =[7,9,0,2];
let n=3;
let ans=array.slice(0,n);
console.log(ans);

//answer: 2
//print last n element
let ans1=array.slice( array.length -n);
console.log(ans1);

//ans:3 check a string is empty or not.
let str=prompt("enter a string : ");
if(str.length== 0){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

//answer: 04 : check fix index
// character is lowercase or not

let str1="5minutes school";
let idx=3;
if( str1[idx]==str[idx].toLowerCase()){
    console.log("character is lowercase");
}else {
    console.log("character is not lowercase.");
}

//answer: 05  strip leading and tailing space of a string.
// we have to trim

let str2=prompt("please enter a string: ");
console.log('original string =${str}');
console.log('string without space = $ {str.trim () }')

//answer: 06 check an element is exist or not in arrray

let arr=['hello','a',23,64,99,-2];
let item =64;
if(arr.indexOf(item) !=-1 ) {
    console.log("element exist in array");
}else{
    console.log("element doesn't exist in arrray.")
}
//===========================================
