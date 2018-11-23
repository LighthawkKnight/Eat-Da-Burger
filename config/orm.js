// ORM - Object Relational Mapping

var connection = require("./connection.js");

class orm {

    static selectAll(table, cb) {
        connection.query("SELECT * from ?;", table, (err,res) => {
            if (err) throw err;
            cb(res);
        });
    }

    static insertOne(table, columns, values, cb) {
        var query = "INSERT INTO ?(?) VALUES (?)"
        connection.query(query, [table, columns.toString(), values.toString()], (err,res) => {
            if (err) throw err;
            cb(res);
        });
    }

    static updateOne(table, setCol, setVal, whereCol, whereVal, cb) {
        var query = "UPDATE ? SET ?=? WHERE ?=?;"
        connection.query(query, [table, setCol, setVal, whereCol, whereVal], (err,res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;