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
    burger.selectAll(burgers => {
        // response.render(view name, { var name in view : callback argument})
        res.render("index", {burger_table: burgers})
    })
})

// Using "insertOne" function
router.post("/burgers/insert", (req, res) => {
    burger.insertOne()
})