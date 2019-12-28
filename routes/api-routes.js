const db = require("../models");

module.exports = function(app){
    // Uses app to set up api routes

    // route to create a todo in DB
    app.post("/api/todos", async function(req, res){
        const todo = await db.Todo.create(
            {   task: req.body.task, 
                done: req.body.done
            }
            );
        res.json(todo);
        console.log("task: " + req.body.task);
        console.log("done: " + req.body.done);
    });
    // route to get all the todos from DB
    app.get("/api/todos", (req, res) => {
        db.Todo.findAll({}).then(todos => {
            res.json(todos);
        });
    });
};