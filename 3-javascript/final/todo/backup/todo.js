// data, state

const tasks = [];

// CRUD

export const addTask = (taskName) => {
  tasks.push({
    id: Date.now(),
    taskName,
  });
};

export const getTasks = () => {
  return tasks;
};

export const getTask = (id) => {
  return tasks.find((task) => task.id === id);
};

export const removeTask = (id) => {
  const currentIndex = tasks.findIndex((task) => task.id === id);
  tasks.splice(currentIndex, 1);
};
