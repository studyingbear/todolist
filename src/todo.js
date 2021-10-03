const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
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
    console.log(event);
    const deleteLi = event.target.parentElement;
    console.log(deleteLi);
    deleteLi.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);