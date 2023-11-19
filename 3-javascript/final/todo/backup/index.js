// selectors

import { addTask, getTasks, removeTask } from "./todo.js";

const addNewTaskForm = document.querySelector("#addNewTaskForm");
const listGroup = document.querySelector("#listGroup");
const taskInput = document.querySelector("#taskInput");

// functions

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
  addTask(taskInput.value);
  listRender(getTasks());
  taskInput.value = null;
};

const listGroupHandler = (event) => {
  if(event.target.classList.contains("list-del-btn")){
    const currentListId = event.target.closest("li").getAttribute("list-id")
    removeTask(parseInt(currentListId))
    listRender(getTasks())
  }
};

// listener
addNewTaskForm.addEventListener("submit", addNewTaskFormHandler);
listGroup.addEventListener("click", listGroupHandler);
