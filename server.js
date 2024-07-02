var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT =3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Todo API Root');
})

app.get('/todos', function(req, res){
    res.json(todos);
})

app.get('/todos/:id', function(req, res){
    var todoID = parseInt(req.params.id);
    var matchedTodo = _.findWhere(todos, {id: todoID});
    // var matchedTodo;

    // todos.forEach( todo => {
    //     if (todoID === todo.id) {
    //         matchedTodo = todo;
    //     }
    // })

    if(matchedTodo){
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
        
    // res.send('asking for todo with id of '+req.params.id);
});

app.post('/todos', function(req, res) {
    var body = _.pick(req.body, 'description','completed');
    var trimmed = body.description.trim();
    if (!_.isBoolean(body.completed) || !_.isString(body.description) || trimmed.length === 0) {
        return res.status(400).send()
    }
    body.id = todoNextId++;
    body.description = body.description.trim();
    todos.push(body)
 
    res.json(todos);
});

app.delete('/todos/:id', function(req, res) {
    var todoID = parseInt(req.params.id);
    var matchedTodo = _.findWhere(todos, {id: todoID});

    if(matchedTodo) {
       todos = _.without(todos, matchedTodo);
       res.json(matchedTodo)
    } else {
        res.status(404).send();  
    }

    
})

app.listen(PORT, function(){
    console.log('Express listening on port',PORT);
})