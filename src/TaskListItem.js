class TaskListItem {
  constructor(text, removeFromTaskListFunction) {
    this.removeFromTaskListFunction = removeFromTaskListFunction;
    this.text = text;
  }

  render() {
    const li = document.createElement('li');
    li.textContent = this.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
  
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      const ul = document.getElementById('task-list');
      ul.removeChild(li);
      removeFromTaskListFunction;
    });

    return li;
  }
}
