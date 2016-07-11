var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

function attachEvent(item) {
  item.addEventListener("click", function(){
    //item.classList.toggle("checked");
	item.toggle;
  });
};

// function attachEvent(item) {
//   item.addEventListener("click", item.toggle());
// };

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


function greyOut(item) {


}