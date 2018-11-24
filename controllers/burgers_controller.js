var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Routing

// Default route = /burgers
router.get("/", (req, res) => {
    res.redirect("/burgers");
})

// Main page
router.get("/burgers", (req, res) => {
    burger.selectAll(burgers => {  // burgers = selectAll query result
        // response.render(view name, { var name in view : var name in this function})
        res.render("index", {burger_data: burgers})
    })
})

// Using "insertOne" function from view/orm.  Ajax call from html form method.
router.post("/burgers/insert", (req, res) => {
    burger.insertOne(req.params.name, result => {   // No query result needed as it is an insert
        res.redirect("/");  // Refreshes page with the new value inserted
    })
})

// Using "updateOne" function from view/orm.  Ajax call from html script
router.put("/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, result => {  // No query result needed as it is an update
        res.sendStatus(200);  // OK
        res.redirect("/");
    })
})