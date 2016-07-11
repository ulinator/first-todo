var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

function addItem() {
    var value = document.querySelector("#textbox").value;

    if (value) {
      var newNode = new TodoItem(value);
      newNode.value = value;
      var type = document.createElement(newNode.type);
      console.log(newNode);
      document.querySelector('#item-list').appendChild(type);
      // attachEvent(newNode);
      console.log("click " + newNode.value);
    } else {
    	console.log("pusty klik");
    }
};

// ***** SKRESLENIA/ODKRESLENIA PO KLIKNIECIU W LISTE *****

// function attachEvent(item) {
//   item.addEventListener("click", function(){
//     item.classList.toggle("checked");
//   });
// };

// items.forEach(attachEvent);