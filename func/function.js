 //--------------------------Function-------------------------------------
         function myFunction()                 //function defination 
 {
     console.log("Welcome to programming");
     console.log("Lets start")
}

 myFunction();   //function call invoke/*

// function myFunction1(msg) // input variable msg  as a parameter 
                             // to be used inside the function
// {
//     //parameter-> input
//     console.log(msg);
// }
// myFunction1("I love JS"); //argument  passing "string" or anydata to variable to function msg


 //use of function as calculator or funx like x and y in maths

// function sum(x, y) //here we are making function to calculate sum
// {
 //     console.log("sum of two nums are=", x + y);
// }
// sum(5, 6);
 // function is use to call and give them input as parameter and arugument are send and executed


// function sum(x, y) { //making sum function where x and y are parameter also known as local 
//     s = x + y;            //variable whose scope exist only inside this funx blocks
//     return s; //this will return value in s and send to where it is call for function here sum
 // }             //after return value nothing is executed inside function
// let total = sum(5, 6);  //return value of function can also be store in variable as total in this example
// console.log(total); //5+6=11 ans


 // ---------------arrow function for sum  and we can call arrowSum at any time ---------------------------

// function sum(a, b) {
//     return a + b;
 // }

 // const arrowSum = (a, b) => {  //(a,b) ko arrow func and store in variable nam arrowSum which is called function also


 //     console.log(a + b);
// }

 //      const val=arrowSum(4,3);
//      console.log("value is =",val);


  //----------------qns 1-------------
 function countVolwel(string)

 {
  if    (k===a || k===e || k===i || k===o || k===u){

  }
for(let k=0; k<String.count ; k++){

  console.log(k)
     
 }
}

let c=countVolwel("hello");

console.log(c);


// as varibles can be pass as an argument in function, function can also be passed as an argument called 
// as callback function
// function myfunc(){
//     console.log("helloooo");
// }

// function abc(myfunc){
//    return myfunc;
// }
  


 //forEach loop in arrays
 // let arr=[1,2,3,4,5,]; //arr.foreach(inside)
// arr.forEach(function printval(val){   // value at each indx
 //     console.log(val);
 // })
//  let ar=[34,34,23,12,45];   //arrowfunction named value
//  ar.forEach((value,inx)=>{ // fuction name value ra inx ho hai
//  console.log(value,inx);
//  });

// //foreach and acess element, inx and array as a whole.

// Q1
// let nums=[2,3,4,5,6];
 // nums.forEach((num)=>{
 //     console.log(num**2);
 // })  //foreach dont provide new array

// let a=[2,4,5,6,3,7];
// a.map((b)=>{
//     console.log(b);
// })

// let arr=[2,4,5,6,3,7];
// let newA=arr.map((b)=>{   //map store each element in array form
//    return b*b;           // we can return any things of value or here function
// })

// console.log(newA);


// let arr=[12,34,45,23,56,67];
// let evenArr=arr.filter((a)=>{
//     return a%2==0;
// });

// console.log(evenArr);

// let arr=[1,2,3,4];

//  let result=arr.reduce((pev,curr)=>{
//     return pev>curr? pev: curr ;  //if pev is > than curr return pev else curr
// });
// console.log(result);

// Q1
// let arr=[89,45,23,99,98,97,95];
// let newArr=arr.filter((h)=>{
//     return h>90;
// })
// console.log(newArr);

// let n = prompt("enter a num");
// let arr = [];
// for (let i = 1; i <= n; i++) { // arr[0]=23 ,arr[4]=34 array 
//     arr[i - 1] = i;
// }
// let new1=arr.reduce((pev,curr)=>{
//     return pev*curr;
// });
// console.log(new1);