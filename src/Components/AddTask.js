import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task) {
            addTask(task);
            setTask("");
        }
    };

    return (
        <div className="add-task">
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;