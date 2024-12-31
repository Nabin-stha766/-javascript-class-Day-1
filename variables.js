//Variables are the container to store data
fullName = "Nabin Shrestha";
Radius = 4;
age = 27;
isFollow = true;
A = null;
B = undefined;
// variables can store data in memory here fullName is a 
// variables storing Nabin Shrestha as string
console.log("fullName =", fullName);
console.log(Radius);
console.log(age);
console.log(isFollow);
console.log(A);
console.log(B);

// js is dynamically typed means any datatype can be store in any variables 

// -----------------------POINTS----------------------------------------------
// casesensetive A and a are different

// Let , var, const egimascript var can be redeclare and update and
//  last value is printed whereas let cannt be redeclare but can be update 
// const pI = 3.14 this cannt be redeclare and update goble scope and block
//  scope => let  can be change different block 

// datatypes - Number, string, boolean, null, undefine, 
//  = 7 permitive data type

const student = {
    fullName: "Nabin shrestha",
    age: 27,
    roll: 1,
    section: "H"

};

console.log(student); //print student info
console.log(student.age); //print only age
console.log(student["age"]);//another way of targetting age


//Js Day-1 practice------------------------------------------------------------

//variables
var a=2; // storing 2 num in a variable a
var b=3;
var name="Nabin"; // name is variable having value Nabin a string
console.log(a+b) //gives 5 
// here var is type of variable , it is not used in modern js 
//as it has drawbacks like 
var a=44;
console.log(a); //gives 44
// its value can be re-declare s
// it is gobal scope

const c=7; //constant variable remain const throughout the code
//c=c+1 //not allowed (assignment to const variable is not allowed)
//const can nither be update nor be re-declared
console.log(c) //gives 7 not 8


let d=5; //let variable as gobal scope
d=d+1;  //let variable can be modified
//let can be update/modified but not re-declared
//let d=55 cant be done let cant be re-declared gobally
console.log(d);//gives 6
//let is block scope variable so it can also be re-assign in block 
//can be acess inside the block 
{
    let d=77;
    console.log(d);//gives 77
}
console.log(d); //gives 6 from gobal 
// let and const are block scoped

//datatype

// 7 primitive datatype  (symbol bigint)
let x="Nabin shrestha"; //string
let y =22; //number
const i=true; //boolean
let  j=undefined;// undefined (not defined yet)
let l=null; // object

// datatype object

const item={
    name:"basketball",  // key:value pair  
    price:150
}

console.log("items:",item) // items:{name:basketball ,price:150}