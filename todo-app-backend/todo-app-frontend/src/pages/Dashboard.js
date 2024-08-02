import React, { useState } from 'react';
import TodoList from '../components/Todos/TodoList';
import TodoForm from '../components/Todos/TodoForm';
import api from '../services/api';

const Dashboard = ({ token }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = async (newTodo) => {
    try {
      const response = await api.post('/todos', newTodo, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} token={token} />
    </div>
  );
};

export default Dashboard;
