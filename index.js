<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .todo-item {
            display: flex;
            justify-content: space-between;
            padding: 5px;
            border-bottom: 1px solid #ddd;
        }
        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="todo-input" placeholder="Add a new task">
    <button onclick="addTodo()">Add</button>
    <ul id="todo-list"></ul>

    <script>
        // Helper function to create a new DOM element
        function createElement(tag, className, innerHTML = '') {
            const element = document.createElement(tag);
            if (className) {
                element.className = className;
            }
            if (innerHTML) {
                element.innerHTML = innerHTML;
            }
            return element;
        }

        // Helper function to append a new to-do item to the list
        function appendTodoItem(todoText) {
            const todoList = document.getElementById('todo-list');

            // Create the list item
            const listItem = createElement('li', 'todo-item');
            const textSpan = createElement('span', '', todoText);
            listItem.appendChild(textSpan);

            // Create the complete button
            const completeButton = createElement('button', '', 'Complete');
            completeButton.onclick = () => completeTodoItem(listItem);
            listItem.appendChild(completeButton);

            // Create the delete button
            const deleteButton = createElement('button', '', 'Delete');
            deleteButton.onclick = () => deleteTodoItem(listItem);
            listItem.appendChild(deleteButton);

            // Append the list item to the todo list
            todoList.appendChild(listItem);
        }

        // Function to add a new to-do
        function addTodo() {
            const todoInput = document.getElementById('todo-input');
            const todoText = todoInput.value.trim();
            if (todoText) {
                appendTodoItem(todoText);
                todoInput.value = '';
            }
        }

        // Helper function to mark a to-do item as complete
        function completeTodoItem(listItem) {
            const textSpan = listItem.querySelector('span');
            textSpan.classList.toggle('completed');
        }

        // Helper function to delete a to-do item
        function deleteTodoItem(listItem) {
            listItem.remove();
        }
    </script>
</body>
</html>
