class Todo {

    constructor(){
        this.tasks = []
    }

    addTask(taskName){
        this.tasks.push({
            id : Date.now(),
            taskName
        })
    }

    getTasks(){
        return this.tasks;
    }

    removeTask(id){
       const currentIndex = this.tasks.find(task => task.id === id);
       this.tasks.splice(currentIndex,1);
    }

}

export default Todo;