const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create)
  .delete(booksController.delete);

module.exports = router;
