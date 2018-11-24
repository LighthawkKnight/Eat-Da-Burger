var orm = require("../config/orm.js");

class burger {

    static selectAll(cb) {
        orm.selectAll("burgers", res => 
            cb(res));   // Sends query
    }

    static insertOne(burger_name, cb){
        orm.insertOne("burgers", ["burger_name", "devoured"], [burger_name, false], cb);
    }

    static updateOne(burger_id, cb){
        orm.updateOne("burgers", "devoured", true, "burger_id", burger_id, cb);
    }
}

module.exports = burger;