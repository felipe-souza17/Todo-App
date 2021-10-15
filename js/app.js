let btnTodo = document.getElementById("btn-todo")
let loginArrow = document.getElementById("to-login")
let myTodos = []
let todo = {}
let id = 0

/* Add Todo  */
btnTodo.addEventListener("click", () => {
    let inputTodo = document.getElementById("new-todo").value
    id += 1

    task = {
        id,
        description: inputTodo
    }
    myTodos.push(task)
    inputTodo = ""
    updateScreen()
})

/* Update Screen */
function updateScreen() {
    let element = ""
    myTodos.forEach(todo => [
        element += `
        <li id-data="${todo.id}">
            <div class="todo-content">
                <p id-data="${todo.id}">${todo.description}</p>
            </div>
            <div class="todo-options">
                <i onclick="deleteTask(this)" id-data="${todo.id}" class="fas fa-times"></i>
            </div>
        </li>
        `
    ])
    document.getElementById("todo-list").innerHTML = element
    document.getElementById("new-todo").value = ""
}

/* Delete Task */
function deleteTask(element) {
    myTodos = myTodos.filter(todo => todo.id != element.getAttribute("id-data"))
    updateScreen()
}

/* Exit Todo */
loginArrow.addEventListener("click", () => {
    location.href = 'login.html'
})