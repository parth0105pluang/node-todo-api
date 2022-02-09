var Todos = require("../models/todoModels");
module.exports = function(app){
    app.get("/api/setupTodos",function(req,res){
        var starterTodos = [
          {
              username:"test",
              todo:"Buy",
              isDone: false,
              hasAttachment: false
          }  
        ];
        Todos.create(starterTodos,function(err,results){
            res.send(results);
        });
    });
}
