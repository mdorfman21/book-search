const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array },
  description: { type: String },
  imageSrc: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
