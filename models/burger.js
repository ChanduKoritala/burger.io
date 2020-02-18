var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },

      insert: function(cols, vals, cb){
          orm.insert("burgers", cols, vals, function(res){
              cb(res);
          });
      },

      update: function(cols, set_val, col_param, val_param, cb) {
          orm.update("burgers", cols, set_val, col_param, val_param, function(res){
              cb(res);
          });
      }
}

module.exports = burger;