let userIsValid = true
let passwordIsValid = true
let inputSubmit = document.getElementById("submit-form")

/* Watch the username input */
document.getElementById("username").addEventListener("input", ()  => {
    let usernameInput = document.getElementById("username").value
    if(usernameInput.length < 3) {
        document.getElementById("error-username").innerHTML = "Your name must have at least 3 characters!"
        userIsValid =  true
        checkButton(userIsValid, passwordIsValid)
    }  
    else {
        document.getElementById("error-username").innerHTML = ""
        userIsValid = false
        checkButton(userIsValid, passwordIsValid)
    }
})


/* Watch the password input and check if I have the 2 inputs to active the submit*/
document.getElementById("password").addEventListener("input", () => {
    let passwordInput = document.getElementById("password").value
    if(passwordInput.length < 3) {
        document.getElementById("error-password").innerHTML = "Your password must have at least 3 characters"
        passwordIsValid =  true
        checkButton(userIsValid, passwordIsValid)
    }  
    else {
        document.getElementById("error-password").innerHTML = ""
        passwordIsValid = false
        checkButton(userIsValid, passwordIsValid)
    }
})

/* 
    Whenever a user enters something in the input, it will check if the name and password are valid, if they are, it will enable the button and change the color, if it is not disabled  
*/
function checkButton(username, password) {
    if(!username && !password) {
        inputSubmit.disabled = false
        inputSubmit.style.backgroundColor = `#5FA319`
    } else {
        inputSubmit.disabled = true
        inputSubmit.style.backgroundColor = `#152F46`
    }
}


/* Here submit the Form and save the user and password in localstorage */
document.getElementById("submit-form").addEventListener("click", () => {
    let nameStorage = document.getElementById("username").value
    let passwordStorage = document.getElementById("password").value

    localStorage.setItem("username", nameStorage)
    localStorage.setItem("password", passwordStorage)
})

function show() {
    let username = localStorage.getItem("username")
    document.getElementById("nameHere").innerHTML = username
}