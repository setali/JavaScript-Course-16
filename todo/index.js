var root = document.querySelector("#root");
var list = document.createElement("ol");
var form = document.createElement("form");
var input = document.createElement("input");
var button = document.createElement("input");
button.type = "submit";
button.value = "Add";

form.appendChild(input);
form.appendChild(button);
form.addEventListener("submit", submitHandler);

root.appendChild(form);
root.appendChild(list);

function getRemoveButton(value) {
  var removeButton = document.createElement("span");
  removeButton.textContent = "x";
  removeButton.style.color = "red";
  removeButton.style.cursor = "pointer";
  removeButton.style.margin = "10px";
  removeButton.addEventListener("click", function (event) {
    event.target.parentElement.remove();
    removeTodo(value);
  });

  return removeButton;
}

function submitHandler(event) {
  event.preventDefault();
  var value = input.value;
  addTodoToDOM(value);
  saveTodo(value);
}

function addTodoToDOM(value) {
  if (value.length < 3) return;
  var li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
  input.value = "";

  var removeButton = getRemoveButton(value);

  li.appendChild(removeButton);
}

function saveTodo(todo) {
  var todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
}

function removeTodo(todo) {
  var todos = getTodos();
  var newTodos = todos.filter(function (el) {
    return el !== todo;
  });
  saveTodos(newTodos);
}

var storage = localStorage;

function getTodos() {
  var items = storage.getItem("todos");
  return items ? JSON.parse(items) : [];
}

function saveTodos(todos) {
  storage.setItem("todos", JSON.stringify(todos));
}

(function () {
  getTodos().forEach(addTodoToDOM);
})();

// alert("salam");
// console.log(confirm("SAlam?"));
// console.log(prompt("salam?"));
