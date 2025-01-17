import React from "react";

const SearchResults = ({ results, onSelectBook }) => {
  return (
    <div className="search-results">
      {results.map((book) => {
        const imageUrl = book.formats["image/jpeg"]; // Hent bilde-URL
        return (
          <div
            key={book.id}
            className="book-card"
            onClick={() => onSelectBook(book)}>
            {imageUrl && (
              <img src={imageUrl} alt={book.title} className="book-cover" />
            )}
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.authors.map((author) => author.name).join(", ")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
