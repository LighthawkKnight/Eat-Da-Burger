var orm = require("../config/orm.js");

class burger {

    static selectAll(cb) {
        orm.selectAll("burgers", res => cb(res));
    }

    static insertOne(cb, burger_name){
        orm.insertOne("burgers", ["burger_name", "devoured"], [burger_name, false], cb);
    }

    static updateOne(cb, burger_name){
        orm.updateOne("burgers", "devoured", true, "burger_name", burger_name, cb);
    }
}

module.exports = burger;