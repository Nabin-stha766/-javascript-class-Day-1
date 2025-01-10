const userName = document.querySelector("#user-name")
const email = document.querySelector("#email")
const password1 = document.querySelector("#password1")
const password2 = document.querySelector("#password2")
const submit = document.querySelector('#submit')

const userMsg = document.querySelector(".user-msg")
const emailMsg = document.querySelector(".email-msg")
const password1Msg = document.querySelector(".password1-msg")
const password2Msg = document.querySelector(".password2-msg")

submit.addEventListener('click', (e) => {
    e.preventDefault()
   
    if (userName.value === "" && email.value === "" && password1.value === "" && password2.value == "") {
        alert("*Please enter the from fields")
    }
        if (userName.value == "") {

            showMsg(userMsg, "*please enter your username", "red")
        }
        else {
            showMsg(userMsg, "Nice name", "green")
        }
        if (email.value=="") {

            showMsg(emailMsg, "*please enter your email Correctly", "red")
        }
        else {
            showMsg(emailMsg, "Got your Email", "green")
        }
        if (password1.value == "") {

            showMsg(password1Msg, "*please enter your password", "red")
        }
        else {
            showMsg(password1Msg, "Got your password", "green")
        }
        if (password2.value == "") {

            showMsg(password2Msg, "*please enter your password Correctly", "red")
        }else if(password1.value!=password2.value){
            showMsg(password2Msg, "*password does not match", "red")
        }
        else {
            showMsg(password2Msg, "password comfirmed", "green")
        }  
})

function showMsg(element, msg, color) {
    element.style.visibility="visible"
    element.style.color = color;
    element.innerHTML = msg


}