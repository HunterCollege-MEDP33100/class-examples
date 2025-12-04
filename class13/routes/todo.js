var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found')
        }

        res.end(data);
    })
});

router.post('/', function (request, response) {
    console.log(request.body);
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found')
        }

        // take request body -> javascript array
        const todoItems = JSON.parse(data);
        todoItems.push({
            id: todoItems.length + 1,
            name: request.body.name,
            completed: request.body.completed,
        });
        console.log(todoItems);

        fs.writeFile('./data/todos.json', JSON.stringify(todoItems), function(error, data) {
            if (error) {
                response.statusCode = '500';
                response.send('Something went wrong');
            }
            response.end(JSON.stringify(todoItems));
        })
    })
})

router.put('/:id', function(request, response) {
    console.log(request.params.id);
    console.log(request.body);
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found')
        }

        // take request body -> javascript array
        const todoItems = JSON.parse(data);
        for (let i = 0; i < todoItems.length; i++) {
            if (todoItems[i].id === parseInt(request.params.id)) {
                todoItems[i] = request.body
            }
        }
        console.log(todoItems);

        fs.writeFile('./data/todos.json', JSON.stringify(todoItems), function(error, data) {
            if (error) {
                response.statusCode = '500';
                response.send('Something went wrong');
            }
            response.end(JSON.stringify(todoItems));
        })
    })
});

router.delete('/:id', function(request, response) {
    fs.readFile('./data/todos.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found')
        }

        // take request body -> javascript array
        const todoItems = JSON.parse(data);
        const updatedTodoItems = todoItems.filter(function(item) {
            if (item.id !== parseInt(request.params.id)){
                return item;
            }
        })
        console.log(updatedTodoItems);

        fs.writeFile('./data/todos.json', JSON.stringify(updatedTodoItems), function(error, data) {
            if (error) {
                response.statusCode = '500';
                response.send('Something went wrong');
            }
            response.end(JSON.stringify(updatedTodoItems));
        })
    })
})

module.exports = router;
