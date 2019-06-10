import axios from "axios";

export default {
  searchBooks: function(query) {
    const newQuery = query.split(" ").join("+");
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + newQuery
    );
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books", id);
  }
};
