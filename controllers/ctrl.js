
const Todo = require('../models/todo.js');

const ctrl = {
    //postData to mongodb
    postData: async (req, res) => {
        try {
            await Todo.create(req.body)
            res.redirect('/');
        } catch (err) {
            res.render('error')
        }


    },
    //get all todos and their datas
    getData: async (req, res) => {
        try {
            const todo = await Todo.find();
            res.render("index", { "todo": todo });
        } catch (err) {
            res.render('error')
        }


    },

    //deletedata on clickk on delete button
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