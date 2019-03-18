class TaskListItem {
  constructor(item){
  this.item = item
  }

  render(container){
    let li = document.createElement('li');
    li.textContent = this.item;

    let button = document.createElement('button')
    button.textContent = 'x';
    li.appendChild(button)
    button.addEventListener('click', () => {
      li.remove();
    })
    container.appendChild(li)

  }


}
