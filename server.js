var http = require("http");
var express = require("express");
var body_parser = require("body-parser");
var rest = require("./app.js");
var md5 = require("MD5");

var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

function REST()
{
    this.configExpress();
}

REST.prototype.configExpress = function()
{
    app.use(body_parser.urlencoded({ extended: true}));
    app.use(body_parser.json());
    var router = express.Router();
    app.use("/", router);
    var rest_router = new rest(router, md5);
    this.startServer();
}

REST.prototype.startServer = function()
{
    var port = Number(process.env.PORT || 8080);
    app.listen(port, function() {
        console.log("Server running on port 8080.");
    });
}

new REST();