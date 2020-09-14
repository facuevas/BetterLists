// Francis Angelo Cuevas
// A simple TODO Application using the MERN stack

// Package imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Class imports
const todo = require('./routes/todo');

// Express init
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', todo);

// MongoDB init
const uri = process.env.ATLAS_DB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => {
    console.log(`MongoDB connection established successfully`);
});

app.listen(process.env.PORT, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
