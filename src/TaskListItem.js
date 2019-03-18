class TaskListItem {
  constructor(content){
    this.content = content
  }

  static newTask(){
    const retrievedContent = document.getElementById('new-task-description')
    return new TaskListItem(retrievedContent.value)
  }

  render(){
    let li = document.createElement('li')
    let deleteButton = document.createElement('button')
    li.innerText = this.content
    deleteButton.addEventListener('click', () => {
      let index = taskList.tasks.indexOf(li)
      taskList.tasks.splice(index, 1)
      li.remove()
    })
    deleteButton.innerText = "delete"
    li.appendChild(deleteButton)
    return li
  }
}
