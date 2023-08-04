/* signup start */

var userSignupName = document.getElementById("userSignupName")
var userSignupEmail = document.getElementById("userSignupEmail")
var userSignupPassword = document.getElementById("userSignupPassword")
var sigBtn = document.getElementById("sigBtn")
var incorect = document.getElementById("incorect")
var corect = document.getElementById("corect")

var users = [];

// local storge
if (localStorage.getItem("userInfo") != null) {
    users = JSON.parse(localStorage.getItem("userInfo") )
}

function existemail() {
    for (let i = 0; i < users.length; i++){
        if (userSignupEmail == users[i].email)
            return true;
        
    }
}
function emptyFilds() {
    userSignupName.value = ""
    userSignupEmail.value = ""
    userSignupPassword.value = ""
}
function signup() {
    var userData = {
        name: userSignupName.value,
        email: userSignupEmail.value,
        password:userSignupPassword.value
    }
    if (userSignupName.value == "" || userSignupEmail.value == "" || userSignupPassword.value == "") {
        incorect.innerHTML = ""
        corect.innerHTML = ""
    incorect.innerHTML="All inputs are required"
    
    }
    else if (existemail()) {
        incorect.innerHTML = ""
        corect.innerHTML = ""
        incorect.innerHTML = "The email is exist "
    }
    else {
        users.push(userData)
        localStorage.setItem('userInfo', JSON.stringify(users))
        incorect.innerHTML = ""
        corect.innerHTML = ""
        corect.innerHTML = "Succsess"
        emptyFilds()
    }
    
}

if (sigBtn != null){
    sigBtn.addEventListener("click",signup)
}


/* signup end */


/* Login start */


let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let valdedText = document.getElementById("valdedText")
let logBtn = document.getElementById("logBtn")
let printedUserName = document.getElementById("printedUserName")

function login() {
    if (userEmail.value == "" || userPassword.value == "") {
        valdedText.innerHTML = "All inputs are required"
    }
    else if (existingUsers() == false) {
        valdedText.innerHTML ="inccorect email or Password"
    }
    else {
        location.href = "home.html";
        printedUserName.innerHTML = users[i].name
    
    }
}
function existingUsers() {
    for (let i = 0; i <users.length; i++) {
        if (userEmail.value == users[i].email && userPassword.value == users[i].password) {
            localStorage.setItem("userPack",JSON.stringify(users[i].name))
            return true;
            
        }
    }
    return false;
}
if (logBtn != null){
    logBtn.addEventListener("click",login)
}


/* Login end */


/*home */
let headar = document.getElementById("headar")
if (headar != null) {
    var text = JSON.parse(localStorage.getItem("userPack"))
    headar.innerHTML = `Welcome ${text}`
}







