
const Todo = require('../models/todo.js');

const ctrl = {
    postData: async (req, res) => {
        try {
            await Todo.create(req.body)
            res.redirect('/');
        } catch (err) {
            res.render('error')
        }


    },
    getData: async (req, res) => {
        try {
            const todo = await Todo.find();
            res.render("index", { "todo": todo });
        } catch (err) {
            res.render('error')
        }


    },
    deleteData: async (req, res) => {
        try {
            const id = req.params.id;
            await Todo.deleteOne({ id });
            res.redirect('/');
        } catch (err) {
            res.render('error')
        }
    }
}

module.exports = ctrl;