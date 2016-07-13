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

      newList.addToList(newNode.value);
      console.log(newList);

    } else {
      console.log("pusty klik");
    }
};