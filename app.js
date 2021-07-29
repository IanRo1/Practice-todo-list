//Get Relevant Divs
const input = document.querySelector(".info")
const button =document.querySelector(".button")
const ul = document.querySelector(".list-item")
//Event Listeners


button.addEventListener("click", addDiv);
//Functions

function addDiv(e){
  e.preventDefault();
  //create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create List
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  input.value = "";
}

