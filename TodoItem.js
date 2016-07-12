function TodoItem(value, active, type) {
	this.value = value;
	this.active = true;
	this.type = type || "li"; // default value of type is li
	this.element = document.createElement(this.type);
	this.element.innerHTML = this.value;
}

TodoItem.prototype.toggle = function() {
	var isActive = this.active;
	var thisElement = this.element ;

	console.log("toggleeee");

	if (isActive === true) {
		thisElement.classList.add("checked");
		this.active = false;
		console.log("byl true i zmienilem na false");
	} else if (isActive === false) {
		thisElement.classList.remove("checked");
		this.active = true;
		console.log("byl false i zmienilem na true");
	} else {
		console.log("bylo cos innego, wtf");
	}

/* or: 
	this.active = !this.active;
	this.element.classList.toggle("checked");
*/
};

TodoItem.prototype.attachEvent = function() {
	var self = this; // to trick JS into passing 'this' but not from this object, but from object's.this, right?
	this.element.addEventListener("click", function() {
		self.toggle();
	});

/* or: 
	this.element.addEventListener("click", this.toggle.bind(this));
*/
};