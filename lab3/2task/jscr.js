function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    
    const li = document.createElement('li');

    
    const span = document.createElement('span');
    span.textContent = taskText;

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        li.classList.toggle('completed');
    };

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

    
    taskInput.value = '';
}