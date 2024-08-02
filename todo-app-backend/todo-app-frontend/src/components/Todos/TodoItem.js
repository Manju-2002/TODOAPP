import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div>
      <span>{todo.description} - {todo.status}</span>
      <button onClick={() => onUpdate(todo._id, 'completed')}>Complete</button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
