var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

function attachEvent(item) {
  item.addEventListener("click", function(){
    item.classList.toggle("checked");
  });
};

function addItem() {
    var value = document.querySelector("#textbox").value;

    if (value) {
      var newNode = new TodoItem(value);
      document.querySelector('#item-list').appendChild(newNode.element);
      attachEvent(newNode.element);
      console.log("click ", newNode);
    } else {
      console.log("pusty klik");
    }
};

// ***** SKRESLENIA/ODKRESLENIA PO KLIKNIECIU W LISTE *****



// items.forEach(attachEvent);