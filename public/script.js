// script.js

const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');

async function loadTodos() {
    try {
        const response = await fetch('/todos');
        const todos = await response.json();
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.task;
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
    }
}

async function addTodo() {
    const task = taskInput.value;
    if (!task) { return; }
    try {
        await fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task })
        });
        location.reload();
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
}

addTaskBtn.addEventListener('click', addTodo);

window.addEventListener('load', loadTodos);

