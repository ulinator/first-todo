var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

function addItem() {
    var value = document.querySelector("#textbox").value;

    if (value) {
      var newNode = new TodoItem(value);
      document.querySelector('#item-list').appendChild(newNode.element);
      // attachEvent(newNode);
      console.log("click ", newNode);
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