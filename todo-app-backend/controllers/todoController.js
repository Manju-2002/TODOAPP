const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const { description } = req.body;
  try {
    const newTodo = new Todo({
      description,
      user: req.user.id, // Assuming `req.user.id` is set by authMiddleware
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;

  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { description, status },
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user.id });
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
