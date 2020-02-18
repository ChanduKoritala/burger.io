var connection = require("../config/connection.js");


var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insert: function (table, cols, vals, cb) {
        connection.query('INSERT INTO ' + table + ' ( ' + cols + ' ) ' + ' VALUES (?)', [vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, cols, set_val, col_param, val_param, cb) {
        connection.query('UPDATE ' + table + ' SET ' + cols + ' = ? WHERE ' + col_param + ' = ?', [set_val, val_param], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}

module.exports = orm;