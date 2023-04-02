import React, { useState, useEffect } from 'react';

function TodoList() { 
const [taskList, setTaskList] = useState([]);
const [newTask, setNewTask] = useState('');
useEffect(() => {
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
setTaskList(storedTasks); }, []);useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(taskList));
},
[taskList]);
const handleNewTask = (event) => {
setNewTask(event.target.value);
};
const handleAddTask = () => { 
if (newTask) { 
setTaskList([...taskList, { 
title: newTask, completed: false 
}
]);

setNewTask(''); 
}
};

const handleDeleteTask = (index) => {
const updatedTasks = [...taskList];
updatedTasks.splice(index, 1); 
setTaskList(updatedTasks);
};

const handleCompleteTask = (index) => {
const updatedTasks = [...taskList];
updatedTasks[index].completed = true;
setTaskList(updatedTasks);
};

return (
<div  class="container" >
<h1>Todo List</h1>
<div class="input-container">
<input type="text" value={newTask} onChange={handleNewTask} />
<button onClick={handleAddTask}>Add Task</button>
</div>
<ul>
{taskList.map((task, index) => (
<TodoItem
key={index}
task={task}
onComplete={() => handleCompleteTask(index)}
onDelete={() => handleDeleteTask(index)}/>
))}
</ul>
</div>
);
}

function TodoItem({ task, onComplete, onDelete }) {
return (<li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
<input class='checkbox' type="checkbox" checked={task.completed} onChange={onComplete} />
<span class='span'>{task.title}</span>
<button onClick={onDelete}>Delete</button>
</li>
);
}

export default TodoList;