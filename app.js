//Get Relevant Divs
const input = document.querySelector(".info")
const button =document.querySelector(".button")
const list = document.querySelector(".list-item")
//Event Listeners


button.addEventListener("click", addDiv);

//Functions

function addDiv(event){
    event.preventDefault();
  //create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create List
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  input.value = "";
  //create buttons
  const completedButton = document.createElement("button");
  completedButton.innerHTML= '<button> X </button>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  list.appendChild(todoDiv);

}

