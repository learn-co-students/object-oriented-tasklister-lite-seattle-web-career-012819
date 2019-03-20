class TaskListItem {
	constructor(description) {
		this.description = description;
	}

	render() {
		let li = document.createElement('li');
		li.textContent = this.description;
		return li;
	}
}
