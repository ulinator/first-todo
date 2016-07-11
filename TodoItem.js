function TodoItem(value, active, type) {
	this.value = value;
	this.active = active;
	this.type = type || "li";
	this.element = document.createElement(this.type);
	this.element.innerHTML = this.value;
}

TodoItem.prototype.toggle = function() {
	var isActive = this.active;

	if (isActive === "inactive") {
		this.classList.add("checked");
		this.active = "active";
		console.log("byl inactive i zmienilem na active");
	} else if (isActive === "active") {
		this.classList.remove("checked");
		this.active = "inactive";
		console.log("byl active i zmienilem na inactive");
	} else {
		console.log("bylo cos innego, wtf");
	}

}