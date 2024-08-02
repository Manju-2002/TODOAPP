const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
