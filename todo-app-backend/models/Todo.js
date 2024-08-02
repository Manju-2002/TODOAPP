const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
