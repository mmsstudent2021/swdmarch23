// selectors

import Todo from "./todo.js";

const addNewTaskForm = document.querySelector("#addNewTaskForm");
const listGroup = document.querySelector("#listGroup");
const taskInput = document.querySelector("#taskInput");

// functions


const todo = new Todo();

const createList = ({ id, taskName }) => {
  const li = document.createElement("li");
  li.setAttribute("list-id", id);
  li.innerHTML = `<button  class='list-del-btn'>Del</button> ${taskName}`;

  return li;
};

const listRender = (lists) => {
  listGroup.innerHTML = "";
  lists.forEach((list) => listGroup.append(createList(list)));
};

// handlers
const addNewTaskFormHandler = (event) => {
  event.preventDefault();
  todo.addTask(taskInput.value);
  listRender(todo.getTasks());
  taskInput.value = null;
};

const listGroupHandler = (event) => {
  if(event.target.classList.contains("list-del-btn")){
    console.log("del");
    const currentListId = event.target.closest("li").getAttribute("list-id")
    todo.removeTask(parseInt(currentListId))
    listRender(todo.getTasks())
  }
};

// listener
addNewTaskForm.addEventListener("submit", addNewTaskFormHandler);
listGroup.addEventListener("click", listGroupHandler);
