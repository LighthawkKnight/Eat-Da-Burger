// ORM - Object Relational Mapping

var connection = require("./connection.js");

class orm {

    static selectAll(table, cb) {
        connection.query("SELECT * from ?;", table, (err,res) => {
            if (err) throw err;
            cb(res);  // query response is sent back
        });
    }

    static insertOne(table, columns, values, cb) {
        var query = "INSERT INTO ?(?) VALUES (?)"
        connection.query(query, [table, columns.toString(), values.toString()], (err,res) => {
            if (err) throw err;
            cb(res);  // query response is sent back
        });
    }

    static updateOne(table, setCol, setVal, whereCol, whereVal, cb) {
        var query = "UPDATE ? SET ?=? WHERE ?=?;"
        connection.query(query, [table, setCol, setVal, whereCol, whereVal], (err,res) => {
            if (err) throw err;
            cb(res);  // query response is sent back
        })
    }
}

module.exports = orm;