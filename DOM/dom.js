// // ..........Document object model(DOM)...........

// //  window object represents an open window in a browser. it is brower's object (not js)
// //  & is automatically created by brower.a
// // it is a global with lots of properties & methods
// console.dir(window);
// // this will help to acess every docs 
// console.dir(document.head.childNodes[1]);
// //  dynamic manipulation / changes in our web page
// document.getElementById("myId")
// document.getElementsByClassName("myClass")
// document.getElementsBytagName("p")
// document.querySelector("myId/myClass/tag")
//  const titleEl=document.querySelector(".title")
// // this will get the element of class name title and store 
// // in tilteEl 

// // we can manipulate titleEl like, its innerText, innerHTML
// // textContent

// const myUl=document.querySelector("ul")
// const myLi=myUl.querySelector("li")
// myLi.style.backgroundColor="red" //changing style 
// // we can change any style like padding, color,maring and any styles
// const liElement=myUl.querySelectorAll("ul")
// // get a nodelist with li 
// // we need to use index in node list to acess these value and change
// liElement[1].style.color="red"
// // or
// // we can see in nodelist it has forEach method so we can use it to access
// liElement.forEach((L)=>{
//     L.style.padding="10px"
// })
// //array method and using callback function 
// //For HTMLCollection 
// //we can use Array.from () to convert into aaray and use array method

// // ----------- Create, Edit and Remove element in DOM-----------------

// const divElement=document.createElement('div')

// divElement.className="container"
// divElement.id="content1"
// divElement.setAttribute("title","generated title")
// divElement.style.backgroundColor="green"
// divElement.innerText="hi i am a div element"

// document.body.appendChild(div)

// //we created a div element, we can use function to create this 
// // or pass array/ object to div to create different variable/dynamic div

// function addLanguage(lang){
//     let li=document.createElement('li')
// //     let createText=document.createTextNode(lang)
// //    li.appendChild(createText)
//     li.innerText=`${lang}`
//     let ul=document.querySelector("ul")
//     ul.appendChild(li)

// }
// addLanguage("python")
// addLanguage("golang")

// document.querySelector("li:last-child").remove()
// document.querySelector("li:last-child").replaceWith(newli)

// //we can create newli and replace old li



// Async Code

// javascript is synchrous program single threaded

// execution Context 

// execute one line of code at a time=> each opertaion waita for the
// last one to complete before execution

// blocking Code vs Non blocking code

// blocking code -Blocking the flow of program (read file sync)
//non blocking code-does not block execution (read flie async)
// depends upon use case to use

// setTimeout(function(){
// console.log("nabin");


// },2000) // do something inside the func after settime once


const changeH1=function (){
   document.querySelector(h1).innerHTML="Hi Ram"
}

const setTime= setTimeout(changeH1,2000) //passing call back func reference of func
document.querySelector('#stop-btn').addEventListener('click',()=>{
    clearTimeout(setTime)
    console.log("stopped")  
})
 // cleartimeout 

