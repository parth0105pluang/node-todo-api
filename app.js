var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require("./config");

var port = process.env.port || 3000;
var setup = require("./controllers/setupController");
var api = require("./controllers/apiController");
app.use("/assets",express.static(__dirname+"/public"));

app.set("view engine","ejs");
mongoose.connect(config.getDbConnectionString());
setup(app);
api(app);
app.listen(port);
