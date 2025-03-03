import React, { useState } from 'react';
import AddTask from './AddTask';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        const newTask = { text: taskText, completed: false };
        setTasks([...tasks, newTask]);
    };
    
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task );
        setTasks(newTasks);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <AddTask addTask={addTask} />
            <div className="tasks">
                {tasks.map((task, index) => (
                    <ToDoItem
                        key={index}
                        index={index}
                        task={task}
                        removeTask={removeTask}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoList;