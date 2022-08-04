const Todo = require('../models/todo')

// index conventionally means showing all resource
function index(req, res, next){
    res.render('todos/index.ejs', {
        todos: Todo.getAll()
    });
}

function show(req, res){
    res.render('todos/show.ejs', {
		todos: Todo.getOne(req.params.id)
	})
}

function newTodo(req, res){
    res.render('todos/new.ejs')
}

function create(req, res){
// this should be the contents of the form
    console.log(req.body, "<-- req.body")
    Todo.create(req.body)
// everytime data is edited, the code needs to redirect the client back to /todos
    res.redirect('/todos');    
}

function deleteTodo(req, res){
    console.log(req.params, '<-req.params to delete')
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
}

module.exports = {
    //index: index,
    index,
    show,
    new: newTodo, // when the key and the value is the same you can abbriviate it this way. It replaces the line above.
    create,
    delete: deleteTodo
}

