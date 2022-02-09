var configValues = require("./config.json");
module.exports={
    getDbConnectionString: function(){
        return "mongodb+srv://test:test@cluster0.2xnfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    }
}