
const mongoose = require('mongoose');

//Todo Schema
const Todo = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
    },

    category: {
        type: String,
        required: true,
        default: "Others"
    },
})

module.exports = new mongoose.model("Todo", Todo);