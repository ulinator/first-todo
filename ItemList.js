function ItemList(items) {
	this.items = ["one"];
};

ItemList.prototype.addToList = function(item) {
	var list = this.items;
	list.push(item);
	console.log("item to: ", item);
	console.log("lista itemsow to: ", list);
};

ItemList.prototype.removeFromList = function(id) {
	var list = this.items;
	console.log("list before filter: " , list);

	var elemFunction = function(item) {
		console.log("funkcja elem : ", id);
		return item.id === id;
	};

	console.log("elem to:", elemFunction());

	var filterFunction = function(item) {
		return item.id !== id;
	};

	// var elem = list.find(elemFunction);

	var filter = list.filter(filterFunction);

	this.items = filter;

	// elem.parentNode.removeChild(elem);

	console.log("list after filter: " , this.items);
};