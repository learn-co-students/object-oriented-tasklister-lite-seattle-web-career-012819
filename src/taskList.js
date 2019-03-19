class TaskList {
  constructor() {
    this.tasks = [];
  }

  render() {
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'task-list');
    this.tasks.forEach((task) => {
      ul.appendChild(task.render());
    })
    return ul;
  }

}
