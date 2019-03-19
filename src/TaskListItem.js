class TaskListItem {
  constructor(id, description, priority, taskList) {
    this.id = id;
    this.description = description;
    this.priorities = ["Low", "Medium", "High"];
    this.priority = this.priorities.indexOf(priority);
    this.taskList = taskList;
  }

  generateTaskContainer() {
    // <li class="task" id="3">
    //   <span>Do the dishes</span> <button id="3">Remove</button>
    // </li>
    const taskItem = document.createElement("li");
    taskItem.className = `priority-${this.priority}`;
    taskItem.id = `task-${this.id}`;

    const description = document.createElement("span");
    description.innerText = this.description;

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit"
    editButton.id = this.id;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Delete"
    removeButton.id = this.id;    

    taskItem.appendChild(description);
    taskItem.appendChild(editButton);
    taskItem.appendChild(removeButton);

    editButton.addEventListener('click', this.addEditTaskForm.bind(this));
    removeButton.addEventListener('click', this.removeTask.bind(this));

    return taskItem;
  }

  removeTask(event) {
    const taskId = event.srcElement.id;
    const taskItem = document.querySelector(`li#task-${taskId}`);
    
    taskItem.remove()
    this.taskList.removeTaskById(taskId)
  }

  editTask(event) {
    event.preventDefault();

    const form = event.srcElement.parentNode;
    
    const newDescriptionInput = document.querySelector("#edit-task-description");
    let newDescription = newDescriptionInput.value;

    const prioritySelect = document.querySelector("#edit-priority");
    let newPriority = this.priorities.indexOf(prioritySelect.value);

    const taskContainer = form.parentNode;
    taskContainer.className = `priority-${newPriority}`;

    const description = document.querySelector(`li#task-${this.id} span`);
    description.innerHTML = newDescription;
    
    form.remove();

    const taskChildren = [].slice.call(taskContainer.children)
    taskChildren.forEach(child => child.style.display = "initial");
    
    this.updateTask(newDescription, newPriority);
  }

  updateTask(description, priority) {
    this.description = description;
    this.priority = priority;
  }

  addEditTaskForm(event) {
    const taskId = event.srcElement.id;
    const taskItem = document.querySelector(`li#task-${taskId}`);
    const taskChildren = [].slice.call(taskItem.children)
    taskChildren.forEach(child => child.style.display = "none");

    const form = this.generateEditTaskContainer.call(this);
    taskItem.appendChild(form);  
  }
  
  generateEditTaskContainer() {
    // <form id="edit-task-3-form" action="#" method="post">
    //   <select id="priority">
    //     <option>High</option>
    //     <option>Medium</option>
    //     <option>Low</option>
    //   </select>
    //   <label for="edit-task-description">Task description:</label>
    //   <input type="text" id="edit-task-description" name="edit-task-description" value="current value">
    //   <input type="submit" value="Edit Task">
    // </form> 
    const form = document.createElement("form");
    form.id = `edit-task-form`;

    // Priority Selection Box
    const select = document.createElement("select");
    select.id = "edit-priority";
    console.log("Priority: ", this.priorities[this.priority]);
    select.value = this.priorities[this.priority];
    
    const option1 = document.createElement("option");
    option1.innerHTML = this.priorities[2];

    const option2 = document.createElement("option");
    option2.innerHTML = this.priorities[1];
    
    const option3 = document.createElement("option");
    option3.innerHTML = this.priorities[0];

    const selected = [option3, option2, option1][this.priority];
    selected.selected = "selected";

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    // label
    const label = document.createElement("label");
    label.for="edit-task-description";
    label.innerHTML = "Task description:";

    // description input
    const description = document.createElement("input");
    description.type = "text";
    description.id = "edit-task-description";
    description.name = "edit-task-description";
    description.value = this.description;

    // submit button
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Edit Task";
    
    
    form.appendChild(select);
    form.appendChild(label);
    form.appendChild(description);
    form.appendChild(submit);

    submit.addEventListener('click', this.editTask.bind(this));
    console.log(form);
    return form;
  }

}
