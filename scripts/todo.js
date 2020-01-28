const todoForm = document.querySelector(".todoForm-js");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todoList-js");

const TODOS_LS = "todos";

function paintTodo(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadToDos() {
    const todos = localStorage.getItem(TODOS_LS);
    if (todos !== null) {

    } 
}

function init() {
    console.log("todo.js is running");
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();