import React from "react";
import API from "../Utils/API";
import Button from "../components/Button";
import Books from "../components/Books";

class Saved extends React.Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks().then(res => {
      console.log(res.data);
      this.setState({ savedBooks: res.data });
    });
  };

  deleteBook = e => {
    API.deleteBook(e.target.value).then(this.loadBooks);
  };

  render() {
    const books = this.state.savedBooks;
    return (
      <div>
        {books.length > 0
          ? books.map(book => (
              <Books
                title={book.title}
                authors={book.authors}
                src={book.imageSrc}
                buttonName="delete"
                description={book.description}
                buttonValue={book._id}
                onClick={this.deleteBook}
              />
            ))
          : "nothing here yet"}
      </div>
    );
  }
}

export default Saved;
