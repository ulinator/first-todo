function TodoList(items) {
	this.items = ["CZIKOZAURA"];
}

TodoList.prototype.addToList = function() {
	var item = this.value;
	this.items =+ item;
	console.log("item to: ", item);
	console.log("lista itemsow to: ", this.items);
};