const loginForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const loginInput = loginForm.querySelector("input");
const sayHello = document.getElementById("hello");

const HIDDEN_CLASS = "hidden";

function handleLogin(event) {
    event.preventDefault();
    loginForm.classList.add()
    const newTodo = toDoInput.value;
    paintTodo(newTodo);
    toDoInput.value = "";
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    console.log(li);
    toDoList.appendChild(li);

}

function deleteToDo(event) {
    event.preventDefault();
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
}

loginForm.addEventListener("submit", handleLogin);