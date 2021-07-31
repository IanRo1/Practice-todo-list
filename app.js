//Get Relevant Divs
const input = document.querySelector(".info")
const button =document.querySelector(".button")
const list = document.querySelector(".list-item")
const tdItem = document.querySelector(".todo-item")
//Event Listeners


button.addEventListener("click", addDiv);
list.addEventListener("click", deleteCheck);

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
  completedButton.innerHTML= '<button>add</button>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Delete Button
  const Delete = document.createElement("button");
  Delete.innerText = 'X';
  Delete.classList.add("delete-button");
  todoDiv.appendChild(Delete);
  //Last Todo
  input.value = "";
  list.appendChild(todoDiv);

}

function deleteCheck(e) {
  const item = e.target;
  //Delete
  if (item.classList[0] === "delete-button"){
    const td = item.parentElement;
    td.remove();
  }
}
