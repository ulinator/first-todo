function ItemList(items) {
	this.items = ["one"];
}

ItemList.prototype.addToList = function(item) {
	var list = this.items;
	list.push(item);
	console.log("item to: ", item);
	console.log("lista itemsow to: ", list);
};

// ItemList.prototype.addToList = function(item) {
// 	var list = this.items;
// 	list.push(item);
// 	console.log("item to: ", item);
// 	console.log("lista itemsow to: ", list);
// };