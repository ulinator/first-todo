var button = document.querySelector("#item-add");

button.addEventListener("click", function() {
  addItem();
});

// function attachEvent(item) {
//   item.element.addEventListener("click", function(){
//     //item.classList.toggle("checked");
//     var COS = item;
// 		COS.toggle();
//   });
// };

// function attachEvent(item) {
//   item.addEventListener("click", item.toggle());
// };

function addItem() {
    var value = document.querySelector("#textbox").value;

    if (value) {
      var newNode = new TodoItem(value);
      document.querySelector('#item-list').appendChild(newNode.element);

      newNode.attachEvent();
      console.log("click ", newNode);
      newNode.addToList;

    } else {
      console.log("pusty klik");
    }
};