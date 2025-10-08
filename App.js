import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskListView from './views/TaskListView';
import AddTaskView from './views/AddTaskView';

export default function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<TaskListView />} />
          <Route path="/add" element={<AddTaskView />} />
        </Routes>
      </div>
    </>
  );
}
