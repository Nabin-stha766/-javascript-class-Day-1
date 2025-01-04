//loops for(i=0; i<5; i++); initialize, condition check, update 

for(let i=1; i<=5; i++)
{
    console.log("Nabin shrestha");
}
let sum=0;
for (let K=1; K<=5; K++){
    sum=sum+K;  //s=0+1 (1)  s=1+2 (3) s=3+3 (6) s=(6+4) (10) s=10+5 (15)
}
console.log("Sum of 1 to 5 =",sum);

// //while loop
//  let j=1;
//  while(j<=5){
//     console.log("j=",j);
//     j++;
//  }
// let j=1
//  do {
//     console.log("nabin");
//     j++;
//  }while(j<=5);

// for of loops for strings and array  
let str="nabinshrestha";
for(let val of str){ //iterator val ->characters
    console.log("value=",val);

}

// // for even num
// for(let m=1; m<=100; m++){
//     if (m%2==0){
//         console.log("even no. are",m);
//     }
// }

//game num


// let num=prompt("enter a num");
// if (num==25){
//     console.log("you are corect")
// }else{
//     console.log("try again!")
// }

// // template literals
// let sentence=`this is a template literal`;
// console.log(sentence);

let obj={
    title:"ballpen",
    price:10
};
let output=`this is ${obj.title} of price ${obj.price}`; //getting key of obj as obj.key_name
console.log(output);

let fullName="nabin shrestha";
console.log(fullName[6]);

//  /n and /t

let str1="nabin shrestha";
let newstr=str1.toUpperCase();// storing in new variable
console.log(newstr);

// ex str1.concat(str2) str.trim() 