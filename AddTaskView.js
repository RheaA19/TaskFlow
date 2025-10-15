//Morales
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AddTaskView = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Task Title is required');
      return;
    }

    
    const newTask = {
      id: Date.now(), // or use UUID
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
    };

    addTask(newTask);  

    
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="taskTitle" className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter task title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="taskDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter task description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="taskPriority" className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Select 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">Add Task</Button>
      </Form>
    </div>
  );
};

export default AddTaskView;
