class TaskList {
	constructor() {
		this.taskListItemsArr = [];
	}

	addDatTask(taskListItem) {
		this.taskListItemsArr.push(taskListItem);
	}

	// get taskListItemsArr() {
	// 	return this.taskListItemsArr;
	// }

	// set taskListItemsArr(Arr) {
	// 	this.taskListItemsArr = Arr;
	// }

	render() {
		let ul = document.createElement('ul');
		for (const item of this.taskListItemsArr) {
			ul.appendChild(item.render());
		}
		return ul;
	}
}

// set diameter(diameter) {
//    this.radius = diameter / 2
// }

// get circumference() {
//    return 2 * Math.PI * this.radius
// }
