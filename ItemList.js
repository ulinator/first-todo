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
	var listLen = list.length;
	console.log("removefromlist");
	console.log("list before filter: " , list);

	var filterFunction = function(item) {
		console.log("funkcja filtrujaca item: ", item);
		return item.id === item;
	};

	// newList.removeFromList({id:1})

	var filter = list.filter(filterFunction);
	console.log("filter", filter);
	console.log("list after filter: " , list);
	// for ( i = listLen; i === 1; i-- ) {
	// 	console.log("item is: " + list[i]);
	// }
};