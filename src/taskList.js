class TaskList {
  constructor(){
    this.tasks = []
  }

  render(){
    let ul = document.createElement('ul')
    ul.setAttribute("id", "task-list")
    for (let i = 0; i < this.tasks.length; i++) {
      ul.appendChild(this.tasks[i])
    }
    return ul
  }

  addTask(task){
    this.tasks.push(task)
  }
}
