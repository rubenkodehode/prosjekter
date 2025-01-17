import React from "react";

const BookDetails = ({ book }) => {
  // Hent bilde-URL
  const imageUrl = book.formats["image/jpeg"];

  return (
    <div className="book-details">
      {imageUrl && (
        <img src={imageUrl} alt={book.title} className="book-cover-large" />
      )}
      <h2>{book.title}</h2>
      <p>
        <strong>Authors:</strong>{" "}
        {book.authors.map((author) => author.name).join(", ")}
      </p>
      <p>
        <strong>Subjects:</strong>
        {book.subjects.length > 0 ? (
          book.subjects.map((subject, index) => (
            <span className="subjects" key={index}>
              {subject}
            </span>
          ))
        ) : (
          <span>No subjects available</span>
        )}
      </p>
      <p>
        <strong>Language:</strong> {book.languages.join(", ")}
      </p>
    </div>
  );
};

export default BookDetails;
