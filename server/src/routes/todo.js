const express = require('express');
const router = express.Router();
const Todo = require('../schemas/Todo');

// Display all the todos
router.get('/', (req, res) => {
    Todo.find((err, doc) => {
        if (err) {
            res.status(500).json({err});
        }
        else {
            res.status(200).json(doc);
        }
    })
});

// Add a new todo
router.post('/add', (req, res) => {
    const { message } = req.body;
    const newTodo = new Todo({
        message,
        completed: false
    });

    newTodo.save(err => {
        if (err) {
            res.status(500).json({err});
        }
        else {
            res.status(200).json({message: "Following TODO has been added", todo: {newTodo}});
        }
    });
    
});

// Edit an existing TODO
router.put('/edit/:id', (req, res) => {
    
    Todo.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

// Delete an existing TODO
router.delete('/delete/:id', (req, res) => {
    
    Todo.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json("Task has been deleted");
        }
    });
});

module.exports = router;