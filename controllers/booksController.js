const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book.find({}).then(dbModel => {
      res.json(dbModel);
    });
  },
  create: function(req, res) {
    db.Book.create(req.body).then(dbModel => {
      res.json(dbModel);
    });
  },
  delete: function(req, res) {
    db.Book.deleteOne({ id: req.body.id }).then(dbModel => {
      res.json(dbModel);
    });
  }
};
