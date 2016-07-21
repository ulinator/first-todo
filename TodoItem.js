function TodoItem(value, active, id, type) {
	this.value = value;
	this.active = true;
	this.id = id;
	this.type = type || "li"; // default value of type is li
	this.element = document.createElement(this.type);
	this.buttonType = '<a class="remove-link" href="#">remove</a>';
	this.element.innerHTML = this.value + this.buttonType;
}

TodoItem.prototype.toggle = function() {
	var isActive = this.active;
	var thisElement = this.element ;

	if (isActive === true) {
		thisElement.classList.add("checked");
		this.active = false;
	} else if (isActive === false) {
		thisElement.classList.remove("checked");
		this.active = true;
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

TodoItem.prototype.attachDelete = function() {
	var parent = this.id;
	var link = this.element.children[0];
	link.addEventListener("click", function() {
		newList.removeFromList(parent);
	});	
};

TodoItem.prototype.attachId = function(number) {
	this.element.setAttribute('id', number);
	this.id = number;
};

// Below is totally useless code, that could be written in two lines of css.
// TodoItem.prototype.hover = function() {
// 	var link = this.element.querySelector('.remove-link');
// 	link.classList.add("visible");
// };

// TodoItem.prototype.unhover = function() {
// 	var link = this.element.querySelector('.remove-link');
// 	link.classList.remove("visible");
// };

// TodoItem.prototype.attachHover = function() {
// 	var self = this; 
// 	this.element.addEventListener("mouseover", function() {
// 		self.hover();
// 	});
// 	this.element.addEventListener("mouseout", function() {
// 		self.unhover();
// 	});
// };