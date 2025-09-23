// day_17 js document code

// topic: loop, (for , while , for of , nested for of,
//     nested loop, Todo App , break, )

// i)for loop
for( let i=1;i<=5;i++){
    console.log(i);
}

//ii) infinite loop
// for( let i=1;i>=0;i++){
//     console.log(i);
// }

//3) parseInt(n) => it convert string to int value

let n=prompt("write your number:");
n=parseInt(n);

for( let i=n;i<n*10;i=i+n){
    console.log(i);
}

//4) Nested for loop

for( let i=1;i<=3;i++){
    console.log('outer loop ${i}:')
    for(let j=1;j<3;j++){
        console.log(j);
    }
}

//5. while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// 6. guess favourite movie

const favMovie ="avater";
let guess=prompt("Guess my favourite movie:");
while( (guess !=favMovie) && ( guess!="quit")){
    guess =prompt ( "wrong juess. Please try again.");
}

if( guess ==favMovie){
    console.log("congrats!!");
}else {
    console.log("you quit.");
}

// 7.Break

let x=1;
while( x<=5){
    if( x==3){
        break;
    }
    console.log(x);
    x++;

}

//8. Loops with arrays
let fruits=["mango", "apple","banana","litchi","orange"];

for(let i=0;i<fruits.length;i++){
    console.log(i, fruits[i]);
}

//9.Loop with nested arrays

let heroes=[["ironman","spider_man","thor"],["superman","wonder woman","flash"]];

for( let i=0;i<heroes.length;i++){
    console.log('List #${i} :')
    for(let j=0;heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

//another way for print nested array
for( let i=1;i<heroes.length;i++){
    console.log(i, heroes[i],heroes.length);
}

for( let i=1;i<heroes.length;i++){
    console.log(i, heroes[i],heroes.length);
    for( let j=0;j<heroes[i].length;J++){
        console.log('j=${j}, ${heroes[i][j]}');
    }
}

// 10 . for of loop (in  c++  , for auto loop like)

let colors=["red","yellow","indigo","violet","orange"];

for( color of colors){
    console.log(color);
    // print color one by one.
}

//11. question: print character one by one using for of

for( char of "5minutes school"){
    console.log( char);
}

//12.Nested for of loop

for( list of heroes){
    for (hero of list){
        console.log(hero);
    }
}
// it print 2 indivisual list.

//13.create Todo App

//list - to show all todos
// add - to add a Todo
// delete - to add a todo
// quit - to exit the todo
// ==========

//html file
// <!-- html for todo list -->
//  <!DOCTYPE html>
//  <html lang="en">
//  <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//  </head>
//  <body>

//     <h1>To do App</h1>
//     <h3>Enter "list" to show all tasks
//     </h3>
//     <h3>Ehter "add" to add a task</h3>
//     <h3>Enter "delete" to remove a task</h3>
//     <h3>Enter quit to quit todo</h3>
//     <script src="daY17_part_4.js"></script>
//  </body>
//  </html>
//===================
//javascript file:

let todo =[];

let request =prompt("please enter your request:")
while(true){
    if(request =="quit"){
        console.log("quitting app.");
            break;
    }

    if(req=="list"){
        console.log("__ _____ ___");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("_______");
    }else if (req=="add"){
        let task =prompt("please enter the task you want to add:");
        todo.push(task);
        console.log("task added");
    }else if( req=="delete"){
        let idx= prompt( "enter the task which you want to delete.");
    }else {
        console.log("wrong request.")
    }
    req=prompt("please enter your request.");

}

//============================
//practice question
//question : 01: write a js program to delete all occurance of element 'num' in a given array.
//Example: if array =[1,2,3,4,5,6,2,3] and num =2 ,
// result will be array =[1,3,4,5,6,3 ]

//question: 02 : find the sum of digit of a number.

//question 03: count number of digit.
//question 04: print the factorial of a number n.
//question 05: Find the largest number in an array with only positive numbers.

//answer..................
//answer-1  delete all occurance.
let arr=[1,2,3,4,5,6,3,2];
let num=2;

for (let i=0;i<arr.length;i++){
    if ( arr[i]==num){
        arr.splice(i,1);
//start from ith idx and delete 1 value.
    }
}
console.log(arr);

//================================

//answer: 02
let number =287152;
let count=0;
let copy =number;
while( copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);
//===============

//answer: 03 print sum of digit
let sum =0;
while( copy>0){
    digit = copy %10;
    sum+=digit;
    copy=Math.floor(copy/10);
}
console.log(sum);

//answer: 04 factorial
let m=5;
let factorial =1;
for( let i=1;i<=n;i++){
    factorial*= 1;
}
console.log('factorial of ${n}  is ${factorial} ');

//answer: 05  print the largest value of array.

let arr1=[1,2,3,4,5,6,3,2,20];
let largest =0;

for( let i=0;i<arr.length;i++){
    if(largest <arr1[i]){
        largest=arr1[i];
    }
}
console.log(largest);

//==========================
