import axios from "axios";

export default {
  searchBooks: function(query) {
    const newQuery = query.split(" ").join("+");
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + newQuery
    );
  }
};
