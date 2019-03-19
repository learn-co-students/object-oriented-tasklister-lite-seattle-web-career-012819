class TaskListItem {
  constructor(description, priority){
    this.description = description
    this.priority = priority
  }

  deleteItem(e){
    let li = e.target.parentNode
    li.parentNode.removeChild(li)
  }

  render(){
    let li = document.createElement('li')
    li.textContent = this.description
    li.classList.add(this.priority)
    let button = document.createElement('button')
    button.textContent = `delete`
    button.addEventListener('click', this.deleteItem)
    li.appendChild(button)
    return li

    // return(
    // `  <li>
    //       ${this.description}
    //       <button data-description="${this.description}">X</button>
    //     </li>
    //     `
    //   )
  }

}
