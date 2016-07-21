var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

// var deleteButton = document.querySelector(".remove-link");

// deleteButton.addEventListener("click", function() {
// 	var parentsId = this.parentNode.getAttribute("id");
// 	console.log("parentsId", parentsId);
// 	// removeFromList(parentsId);
// });

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
			newNode.attachDelete();
			
	    newList.addToList(newNode);

    } else {
      console.log("pusty klik");
    }
};

function getObject(listName, itemName)  {
	var objWithItem = listName.forEach().find(itemName);
	console.log("zwracam: ", objWithItem);
	return objWithItem;
};