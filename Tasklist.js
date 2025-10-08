// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<TaskListView tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/add" element={<AddTaskView addTask={addTask} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
