let correctUsername = localStorage.getItem("username")
let correctPassword = localStorage.getItem("password")
let inputSubmit = document.getElementById("login-form")
let sayUserWelcome = document.getElementById("user-welcome")

sayUserWelcome.innerHTML = `${correctUsername}`
console.log(correctPassword)



document.getElementById("password").addEventListener("input", () => {
    let passwordInput = document.getElementById("password").value
    if(passwordInput.length < 3) {
        document.getElementById("error-password").innerHTML = "Your password must have at least 3 characters"
        checkButton(passwordInput)
    }  
    else {
        document.getElementById("error-password").innerHTML = ""
        checkButton(passwordInput)
    }
})
function checkButton(password) {
    if(password === correctPassword) {
        inputSubmit.disabled = false
        inputSubmit.style.backgroundColor = `#5FA319`
    } else {
        inputSubmit.disabled = true
        inputSubmit.style.backgroundColor = `#152F46`
    }
}