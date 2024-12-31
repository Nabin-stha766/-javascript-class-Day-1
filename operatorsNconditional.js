// operator a+b is a expression with operands a and b with + operator
let a=5;
let b=7;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a/b=",a/b);
console.log("a*b=",a*b);
console.log("a%b=",a%b);
console.log("a**b=",a**b); 

// arthimatic operator

// Unary operator
console.log(a++);
console.log(a--);

a += 4 // a=a+4 **= -= esto hai assignment operator

// comparison operator ==, !=, >, >=, <, <= 
let x=9;
let y=14;
console.log("x=y", x==y);// flase comparaing these two value 
console.log("x!=y", x!=y); //true 
console.log("x===y", x===y); // this will check string or datatype too
console.log("x!==y", x!==y); 

// logical operators &&, ||, ! cond1 and cond2 check 

// where to use then?  : in conditional statement ok

let mode="dark";
let color;


if (mode== "dark" ) { // checking condition if mode === is dark? run program inside bracket 
    color ="darkblue";
}


if (mode==="light") {
    color ="lightblue";
}
console.log(color);


// is num even?

let num=13;
 if (num%2 ===0){
    console.log(num," is even");
 }
 else {
    console.log(num, "is odd" )
 }


 let age=25;

 if (age < 18){
    console.log("is child");

 }
 else if ( age > 18){
    console.log("is a adult");

 }
else (age >60)
{
    console.log("is a older ");
}

//ternary operator condition? true: flase;

let price = 45;
 let p=(price ==45) ? "buy" : "dontbuy" ;
 console.log(p);


//  MDM doc
// let number=prompt("enter a num");
// if (number%5==0){
//     console.log(number,"is a multiple of five");
// }
// else { 
//     console.log(number,"is not a multiple of five");
// }


let marks=prompt("enter a marks");
let grade;  //we will use this variable so define it intial 
if (marks>=80 && marks <=90 ){  //defining range 80 to 90 
    console.log(marks,"grade is A");
}
else if (marks>=60 && marks <=79 ){
    console.log(marks,"grade is B");
}


else if (marks>=50 && marks <=59 ){
    console.log(marks,"grade is C");
}

else{
     grade="fail";

}

console.log(grade);
