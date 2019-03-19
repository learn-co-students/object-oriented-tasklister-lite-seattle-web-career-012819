class TaskListItem {
  constructor(content) {
    this.content = content
  }

  static newTask() {
    const description = document.getElementById('new-task-description')
    return new TaskListItem(description.value)
  }

  render() {
    let li = document.createElement('li')
    let del = document.createElement('button')
    li.innerHTML = this.content
    del.addEventListener('click', () => {
      let index = taskList.tasks.indexOf(li)
      taskList.tasks.splice(index, 1)
      li.remove()
    })
    del.innerText = "delete"
    li.appendChild(del)

    return li
  }

}
