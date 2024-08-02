import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../api';

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos(token);
      setTodos(data);
    };
    getTodos();
  }, [token]);

  const handleAddTodo = async () => {
    const data = await createTodo({ description: newTodo }, token);
    setTodos([...todos, data]);
    setNewTodo('');
  };

  const handleUpdateTodo = async (id, status) => {
    await updateTodo(id, { status }, token);
    setTodos(todos.map(todo => (todo._id === id ? { ...todo, status } : todo)));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id, token);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.description} - {todo.status}
            <button onClick={() => handleUpdateTodo(todo._id, 'completed')}>Complete</button>
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
