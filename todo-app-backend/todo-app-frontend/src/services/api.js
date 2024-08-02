const API_URL = 'http://your-backend-url/api';

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const fetchTodos = async (token) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createTodo = async (todoData, token) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(todoData),
  });
  return response.json();
};

export const updateTodo = async (id, todoData, token) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(todoData),
  });
  return response.json();
};

export const deleteTodo = async (id, token) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};
