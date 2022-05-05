let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    inworks = document.querySelector('.inwork');

let todoList = [];
addButton.addEventListener('click', function(){

let newTask = {
  todo: addMessage.value,
  checked: false 
};
  todoList.push(newTask);
  displayMessages();
});

function displayMessages(){
  let displayMessage = '';
  todoList.forEach(function(item, i){
    displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}'>
    <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}