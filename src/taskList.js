class TaskList {
  constructor(){
    this.tasks = []
  }

   newTask(description){
     const newTask = new TaskListItem(description)
     this.tasks.push(newTask)
   }

  render(){
    const ul = document.createElement('ul')
    const heading = document.createElement('h3')
    heading.textContent = "My Todo List"
    ul.appendChild(heading)
    this.tasks.forEach((task) => {
      const li = task.render()
      ul.appendChild(li)
    })
    return ul;

    // ******* Old way setting inner html *********
    // return(
    // `
    // <ul>
    // <h3>My Todo List</h3>
    // ${this.tasks.map((task) => task.render()).join('')}
    // </ul>
    //
    // `
  // )
  }
}
