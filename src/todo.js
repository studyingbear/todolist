const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODO_DEFAULT = "todos";

const id = checkLogin();

let toDos = [];

function saveToDos() {
    if (id) {
        localStorage.setItem(id, JSON.stringify(toDos));
    } else {
        localStorage.setItem(TODO_DEFAULT, JSON.stringify(toDos));
    }
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        id : Date.now(),
        value : newTodo
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

function paintTodo(newTodoOjb) {
    const li = document.createElement("li");
    li.id = newTodoOjb.id;
    const span = document.createElement("span");
    span.innerText = newTodoOjb.value;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);

}

function deleteToDo(event) {
    event.preventDefault();
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteLi.id));
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = id ? localStorage.getItem(id) : localStorage.getItem(TODO_DEFAULT);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}