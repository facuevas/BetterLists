// This is our schemas for Todo

const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Todo', Todo);