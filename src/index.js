document.addEventListener('DOMContentLoaded', () => {
	const taskList = new TaskList();
	const listContainer = document.getElementById('list');
	const renderApp = () => listContainer.appendChild(taskList.render());

	let form = document.getElementById('create-task-form');
	form.addEventListener('submit', addNewTask);

	function addNewTask(ev) {
		console.log('yeee');
		ev.preventDefault();
		let description = document.getElementById('new-task-description');
		let task = new TaskListItem(description.value);
		taskList.addDatTask(task);
		renderApp();
	}
	// renderApp();
});
