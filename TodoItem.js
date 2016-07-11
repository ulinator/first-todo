function TodoItem(value, active, type) {
	this.value = value;
	this.active = active;
	this.type = type || "li";
	this.element = document.createElement(this.type);
	this.element.innerHTML = this.value;
}