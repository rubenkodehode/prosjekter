import React, { useState, useEffect } from "react";
import Autocomplete from "./components/Autocomplete";
import SearchResults from "./components/SearchResults";
import BookDetails from "./components/BookDetails";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredResults = results.filter((book) => {
    const matchesLanguage =
      !languageFilter || book.languages.includes(languageFilter);
    const matchesSubject =
      !subjectFilter ||
      book.subjects.some((subject) =>
        subject.toLowerCase().includes(subjectFilter.toLowerCase())
      );
    return matchesLanguage && matchesSubject;
  });

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <h1>GutenDex</h1>
      <h3>A Book Search Index</h3>
      <Autocomplete
        setResults={setResults}
        setLoading={setLoading}
        setSelectedBook={setSelectedBook}
      />
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by subject"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        />
        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}>
          <option value="">All Languages</option>
          {[...new Set(results.flatMap((book) => book.languages))].map(
            (lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            )
          )}
        </select>
      </div>
      {loading && <div className="spinner"></div>}
      <SearchResults results={results} onSelectBook={handleSelectBook} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Book Details">
        {selectedBook && (
          <BookDetails
            book={selectedBook}
            onSetSubjectFilter={(subject) => {
              setSubjectFilter(subject);
              setIsModalOpen(false);
            }}
          />
        )}
        <button onClick={closeModal}>&times;</button>
      </Modal>
    </div>
  );
};

export default App;
