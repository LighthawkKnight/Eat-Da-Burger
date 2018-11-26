var express = require('express');
var exphbs = require('express-handlebars');

// Express config - init
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));

// Express config - data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express-handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Router Controller
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Listener
app.listen(PORT, ()=> {
    console.log("App listening on PORT: " + PORT);
});
