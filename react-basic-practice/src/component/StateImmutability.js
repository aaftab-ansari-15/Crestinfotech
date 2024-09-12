import React, { useState } from "react";
const initialTask = [
  { taskName: "Task1", taskStatus: true },
  { taskName: "Task2", taskStatus: false },
  { taskName: "Task3", taskStatus: false },
];
const StateImmutability = () => {
  const [todoTasks, setTodoTasks] = useState(initialTask);
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const addTodoTasks = () => {
    if (taskName.trim()) {
      const newTask = {
        textName: taskName,
        taskStatus: false,
      };
      setTodoTasks([...todoTasks, newTask]); // Add new task immutably
      setTaskName(""); // Clear input field
    }
  };
  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <center>
      <h4>StateImmutability</h4>
      <div className="d-flex justify-content-center">
        <input
          type="checkbox"
          name="taskStatus"
          value={taskStatus}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={handleInputChange}
        />
        <button onClick={addTodoTasks}>Add This Task</button>
      </div>
      <div>
        {todoTasks &&
          todoTasks.map((task, index) => (
            <p key={index}>
              {index}: {task.taskName} is {task.taskStatus}
            </p>
          ))}
      </div>
    </center>
  );
};

export default StateImmutability;
