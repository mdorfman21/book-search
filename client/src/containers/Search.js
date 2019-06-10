import React from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import API from "../Utils/API";
import Books from "../components/Books";

class Search extends React.Component {
  state = {
    search: "",
    books: []
  };

  buttonClickApi = e => {
    console.log(this.state);
    API.searchBooks(this.state.search).then(res => {
      console.log(res.data);
      this.setState({ ...this.state, books: res.data.items });
      console.log("state:", this.state);
    });
  };

  updateSearch = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ ...this.state, [name]: value });
  };

  saveToDatabase = (title, description, authors, imageSrc) => {
    const bookData = { title, description, authors, imageSrc };
    API.saveBook(bookData);
  };

  render() {
    const books = this.state.books;
    return (
      <div>
        <Form
          placeholder="Search for a book!"
          name="search"
          onChange={this.updateSearch}
        />
        <Button name="search" onClick={this.buttonClickApi} />
        {books.length > 0
          ? books.map(book => (
              <Books
                title={book.volumeInfo.title}
                key={book.id}
                onClick={() => {
                  this.saveToDatabase(
                    book.volumeInfo.title,
                    book.volumeInfo.description,
                    book.volumeInfo.authors,
                    book.volumeInfo.imageLinks.thumbnail
                  );
                }}
                authors={book.volumeInfo.authors}
                src={book.volumeInfo.imageLinks.thumbnail}
                description={book.volumeInfo.description}
                buttonName="save"
              />
            ))
          : "No Results Yet"}
      </div>
    );
  }
}
export default Search;
