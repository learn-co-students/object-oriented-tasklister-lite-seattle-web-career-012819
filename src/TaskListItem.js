class TaskListItem {
  constructor(item){
    this.item = item
  }

  render(container){
    let li = document.createElement("li");
    li.textContent = this.item;

    let button = document.createElement("button");
    button.textContent = 'remove'
    button.addEventListener('click', () => {
      li.remove();
    })
    li.appendChild(button)
    container.appendChild(li);
  }
}
