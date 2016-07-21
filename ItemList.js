function ItemList(items) {
	this.items = [];
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
	
	var elem = document.getElementById(id);

	var filterFunction = function(item) {
		console.log("funkcja filtrujaca item: ", item);
		return item.id !== id ;
	};

	// newList.removeFromList({id:1})

	var filter = list.filter(filterFunction);
	elem.parentNode.removeChild(elem);

	this.items = filter;
	console.log("list after filter: " , list);
};