import React from 'react';

const ToDoItem = ({ task, index, removeTask, toggleComplete }) => {
    return (
        <div className={`todo-item ${task.completed ? "completed" : ""}`}>
            <span
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
                onClick={() => toggleComplete(index)}
            >
                {task.text}
            </span>
            <button onClick={() => removeTask(index)}>Delete</button>
        </div>
    );
};

export default ToDoItem;