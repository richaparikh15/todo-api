var express = require('express');
var app = express();
var PORT =3000;
var todos = [{
    id:1,
    description: 'Meet Shalin for dinner',
    completed: false
}, {
    id: 2,
    description: 'Buy milk for Rishi',
    completed: false
}, {
    id: 3,
    description: 'Cook dinner',
    completed: true
}]

app.get('/', function(req, res){
    res.send('Todo API Root');
})

app.get('/todos', function(req, res){
    res.json(todos);
})

app.get('/todos/:id', function(req, res){
    var todoID = parseInt(req.params.id);
    var matchedTodo;

    todos.forEach( todo => {
        if (todoID === todo.id) {
            matchedTodo = todo;
        }
    })

    if(matchedTodo){
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
        
    // res.send('asking for todo with id of '+req.params.id);
})

app.listen(PORT, function(){
    console.log('Express listening on port',PORT);
})