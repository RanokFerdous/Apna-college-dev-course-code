// js part_5 day_18
//Topic: Object Literals, Creating object Literals,
//3.creating post , 4. Get values,
//5.conversion in Get values
//6. Add_update value
// 7.Nested Objectss 8.Array of objects .
// 9.Math objects . 10. random interger
// 11.Practice 12.Guessing Game.

//1.Object Literals.

//NOTE: *** Used to store keyed collection and complex entities.
// Property => ( key , value) pair
// NOTE: **objects are a collection of properties
// Note :student is object, (key,value) pair
//  are Property.
//  Object are collection of property

// NOTE : array are objects.
//example of object Literals:

let delhi ={
    latitude: "28.7041 N",
    longitude: "77.1035 E"
};

const student ={
    name:"ranok",
    age:23,
    marks:94.4,
    city:"Delhi",
    colors:["red","blue"]
};

// NOTE: **we can change name, age,...
//But can't change object reference.
 //When we create "const" object.
console.log(student); //
console.log(student.city);  // city:'Delhi'
console.log(student[0]);
console.log(student.colors[1]); //blue

//===================================
//===============
//Topic: 003. Add/Update Value

// i) change the city to "Mumbai", ii) add new property , gender : "Female"
//ii)change the marks to "A"
student.city="Mumbai";
student.gender="Female";
student.marks=39;
student.marks=[99,89,32];
console.log(student);

// {
//   name: 'ranok',
//   age: 23,
//   marks: [ 99, 89, 32 ],
//   city: 'Mumbai',
//   colors: [ 'red', 'blue' ],
//   gender: 'Female'
// }
//=========================
//Topic: 3.5 delete objects and property .

delete student.marks[1];
delete student.city;
console.log(student);

// {
//   name: 'ranok',
//   age: 23,
//   marks: [ 99, <1 empty item>, 32 ],
//   colors: [ 'red', 'blue' ],
//   gender: 'Female'
// }

//=================================


//topic: 04 Thread/ Twitter post create

// properties: username, content, likes, reposts,tags

const post={
    username: "@ranokferdous",
    content:"this is my #firstpost",
    likes: 150,
    reposts:5,
    tags:["@5miutes school","@alpha","beta"]
};

console.log(post);
console.log(post.tags[1]); //@alpha





//Topic: 0 6: Get Value
//js automatically convets objects keys to string.
//Even if we made the number as a key, the number will be converted to string.

const Objects ={
    1:"a", 2:"b",true:"c", null:"d",undefined:"e"
};

//=======================
//Topic: 07 Objects of objects
//**Storing information of multiple students

const classInfo ={
    aman: {
        grade:"A+",
        city:"Delhi"
    },
    shradha : {
        grade:"A",
        city:"Pune"
    },ranok:{
        grade:"D",
        city:"bangladesh"
    }
};

console.log(classInfo);

console.log(classInfo.aman);
console.log(classInfo.aman.city);
//wrong: console.log(classInfo[0][1]);
console.log(classInfo.ranok.grade);
//=======================


//Topic: update and Array of objects concept .
//Example of ** array of objects :
// Storing information of multiple student using array of objects

const classDetails =[
    {
        name:"iman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"rakesh",
        grade:"B",
        city:"maharasto"
    },{
        name:"ranok",
        grade:"A",
        city:"Dhaka"
    }
];

console.log(classDetails);

//***update some value of array objects
classDetails[1].name ="sharaha";
classDetails[1].city="London";

//create new key
classDetails[1].gender ="female";
console.log(classDetails[1]);
//{ name: 'sharaha', grade: 'B', city: 'London', gender: 'female' }

//==============================
//Topic: Math object : Properties and Methods

//Properties: Math.PI , Math.E

console.log(Math.PI);
console.log(Math.E);

// method of Math
console.log( Math.pow(2,3));
console.log(Math.abs(-23.2));
console.log(Math.floor(3.2)); //3
console.log(Math.floor(-23.23)); // -24

console.log(Math.ceil(32.3)); //33
console.log(Math.ceil( -2.2)); // -3

//----------Random integer generate
//Math.random() -> give between 01 to 1 value.
//not 0 or 1 exactly.
console.log(Math.floor( Math.random()*10));

//question : The range will be 1 to 100

console.log( Math.floor ( Math.random()* 100 )+ 1) ;

//generate  value among 21 to 25
console.log((Math.floor(Math.random()* 5)) +21);

//=====================
//topic : creaet a guessing game
//question: user enter a max number and try to guess a random generated number between 1 to max.

//const max=prompt( "enter the max number ");
const max =5;

const random =Math.floor(Math.random () * max ) +1;

let guess=  prompt("guess the number : ");

while( true){
    if (guess =="QUIT"){
        console.log("user quit.");
        break;
    }
    if ( guess ==random){
        console.log("you are right! congrats!! random number was", random);
        break;
    }else {
        guesss=prompt("wrong guess. please try again.");
    }
}

//===============Practice question =========
//ques 01: generate dice roll representing number.
console.log((Math.floor(Math.random() * 6) )+1);

//question: 02 : create object representing in a car that has following properies: car: name, model,color

const car ={
    name:"maruti", model:"Maruti-808",color:"white"
};
console.log(car.name);

//ques: 3: create a person object with name,age,city

const person={
    name :"Jane Doe", age: 21, city: "new York"
};
person.city="OXFORD";
person.country ="Palestain";
console.log(person);
