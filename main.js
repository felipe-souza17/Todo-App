function saveUserData() {
    let nameStorage = document.getElementById("username").value
    localStorage.setItem("username", nameStorage)
    console.log("armazenou")
}

function show() {
    let username = localStorage.getItem("username")
    document.getElementById("nameHere").innerHTML = username
}