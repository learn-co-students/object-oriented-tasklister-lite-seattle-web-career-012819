class TaskList {
  constructor() {
    this.tasks = [];
    this.idCounter = 0;
    this.removeTaskById = this.removeTaskById.bind(this);
  }

  render() {
    const docFragment = new DocumentFragment;
    
    this.tasks
      .sort((task1, task2)=> task2.priority - task1.priority)
      .map(taskListItem => taskListItem.generateTaskContainer())
      .forEach(taskListItem => docFragment.appendChild(taskListItem));

    return docFragment;
  }

  addTask(taskText, priority) {
    let id = this.idCounter++;
    let newTask = new TaskListItem(id, taskText, priority, this);
    this.tasks.push(newTask)
  }

  removeTaskById(id) {
    console.log(id);
    console.log(this.tasks.find(task => task.id = id));
    const taskIndex = this.tasks.find(task => task.id === id);
    this.tasks.splice(taskIndex, 1);
    console.log(this.tasks)
  }

}
