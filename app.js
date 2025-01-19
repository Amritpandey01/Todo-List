let currentEditingIndex = -1
function addTodo(){
    const input = document.getElementById('todo-input')
    const todoText = input.value.trim()
    if(todoText !== ""){
        if(currentEditingIndex === -1){
            const li = document.createElement('li')
            li.textContent = todoText;
            const actions = document.createElement('div')
            actions.classList.add('actions')
            
            const editButton = document.createElement('button')
            editButton.textContent = "Edit"
            editButton.onclick = function() {
                editTodo(todoText, li)
            }
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function(){
                deleteTodo(li);
            }
            actions.appendChild(editButton)
            actions.appendChild(deleteButton)
            li.appendChild(actions);
            document.getElementById('todo-list').appendChild(li)
        }
        else{
            const todos = document.getElementById('todo-list').children;
            todos[currentEditingIndex].firstChild.textContent = todoText;
            currentEditingIndex = -1;
        }
        input.value = ''
    }
}
function editTodo(todoText, li){
    document.getElementById('todo-input').value = todoText
    currentEditingIndex = Array.from(li.parentElement.children).indexOf(li)
}
function deleteTodo(li){
    li.parentElement.removeChild(li)
    }