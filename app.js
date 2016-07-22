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
			newNode.attachDelete();

	    newList.addToList(newNode);

    } else {
      console.log("pusty klik");
    }
};