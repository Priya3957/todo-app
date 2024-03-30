// App.js
import React, { useState } from 'react';
import  "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId, newText) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="App">
      <nav>
        <div className="logo">NVIC TODO LIST</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li><a href="#">Discover</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Content</a></li>
          <li><a href="#">login</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="center">
          <i className="fa-solid fa-clock-rotate-left"></i>
        </div>
        <div id="Todo">
          <h1>NVIC Task List 2024</h1>
          <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="What do you have planned?"
            />
            <button type="submit">Add task</button>
          </form>
          <section className="task-list">
            <h2>Tasks</h2>
            <div id="tasks">
              {tasks.map(task => (
                <div className="task" key={task.id}>
                  <div className="content">
                    <input
                      type="text"
                      className="text"
                      value={task.text}
                      onChange={(e) => handleEditTask(task.id, e.target.value)}
                    />
                  </div>
                  <div className="actions">
                    <button onClick={() => handleEditTask(task.id, task.text)}>Save</button>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
