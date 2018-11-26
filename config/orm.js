// ORM - Object Relational Mapping

var connection = require("./connection.js");

class orm {

    static selectAll(table, cb) {
        connection.query("SELECT * FROM " + table, (err,res) => {
            if (err) throw err;
            cb(res);  // query response is sent back
        });
    }

    static insertOne(table, columns, values, cb) {
        var query = "INSERT INTO " + table + "(" + columns.toString() + ") VALUES(" + values.toString() + ")"
        console.log(query);
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res);  // query response is sent back
        });
    }

    static updateOne(table, setCol, setVal, whereCol, whereVal, cb) {
        var query = 'UPDATE ' + table + ' SET ' +  setCol + '=' + setVal + " WHERE " + whereCol + '=' + whereVal;
        console.log(query);
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res);  // query response is sent back
        })
    }
}

module.exports = orm;