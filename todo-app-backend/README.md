# Todo App Backend

This is the backend for the Todo App, built with Node.js, Express, and MongoDB.

## Project Structure

todo-app-backend/
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ └── todoController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── User.js
│ └── Todo.js
├── routes/
│ ├── auth.js
│ └── todos.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js


## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MongoDB (Ensure MongoDB is running)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/todo-app-backend.git
   cd todo-app-backend

npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


npm start

The server will run on http://localhost:5000.

API Endpoints
Auth Routes
Register: POST /api/auth/register

{
  "username": "example",
  "email": "example@example.com",
  "password": "password"
}
Login: POST /api/auth/login


{
  "email": "example@example.com",
  "password": "password"
}
Todo Routes
Get Todos: GET /api/todos

Headers: Authorization: Bearer <token>
Create Todo: POST /api/todos

Headers: Authorization: Bearer <token>
Body:
{
  "title": "New Todo",
  "description": "Todo description"
}
Update Todo: PUT /api/todos/:id

Headers: Authorization: Bearer <token>
Body:

{
  "title": "Updated Todo",
  "description": "Updated description"
}
Delete Todo: DELETE /api/todos/:id

Headers: Authorization: Bearer <token>

Project Structure
config/db.js: MongoDB connection setup.
controllers/authController.js: Handles user registration and login.
controllers/todoController.js: Handles CRUD operations for todos.
middleware/authMiddleware.js: Middleware for protecting routes.
models/User.js: User model.
models/Todo.js: Todo model.
routes/auth.js: Routes for authentication.
routes/todos.js: Routes for todo CRUD operations.
server.js: Entry point of the application.