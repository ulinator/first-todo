var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

var newList = new ItemList();
var counter = 0;

function addItem() {
    var value = document.querySelector("#textbox").value;

    if (value) {
      var newNode = new TodoItem(value);
      var idNumber = counter + 1;

      document.querySelector('#item-list').appendChild(newNode.element);

      newNode.attachId(idNumber);
      counter = counter + 1;

      newNode.attachEvent();

      newList.addToList(newNode);

    } else {
      console.log("pusty klik");
    }
};

function showList(listName) {
	console.log(listName);
};

// function getItem(value) {
// 	forEach 
// 	if (id === value) {
// 		return value;
// 	} else {
// 		console.log("dupa");
// 	}
// };

function getObject(listName, itemName)  {
	var objWithItem = listName.forEach().find(itemName);
	console.log("zwracam: ", objWithItem);
	return objWithItem;
};

// function deleteItem(listName, itemName) {
// 	var list = listName.items;

// 	console.log(list);
// 	// console.log("Lista przed usunieciem: ", newList);
// 	// itemName = this.id;
// 	// var filteredList = listName.filter(itemName);


// 	// console.log("Lista po usunieciu: ", newerList);
// 	// var newList = filteredList;
// }
