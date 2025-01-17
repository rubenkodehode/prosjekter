import React, { useState, useEffect } from "react";
import Autocomplete from "./components/Autocomplete";
import SearchResults from "./components/SearchResults";
import BookDetails from "./components/BookDetails";
import "./App.css";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [languageFilter, setLanguageFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchText.length < 3) {
      setResults([]);
      return;
    }

    const fetchBooks = async () => {
      try {
        let url = `https://gutendex.com/books?search=${searchText}`;
        if (languageFilter) url += `&languages=${languageFilter}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();

        const filteredResults = data.results.filter((book) =>
          authorFilter
            ? book.authors.some((author) =>
                author.name.toLowerCase().includes(authorFilter.toLowerCase())
              )
            : true
        );

        const filteredSubjects = results.filter((book) =>
          subjectFilter
            ? book.subjects.some((subject) =>
                subject.toLowerCase().includes(subjectFilter.toLowerCase())
              )
            : true
        );
        setResults(filteredResults);
        setError(null);
      } catch (err) {
        setError(err.message);
        setResults([]);
      }
    };

    const debounceTimeout = setTimeout(fetchBooks, 500); // Debouncing
    return () => clearTimeout(debounceTimeout); // Cleanup timeout
  }, [searchText, languageFilter, authorFilter]);

  const handleSelectBook = (book) => setSelectedBook(book);

  return (
    <div className="App">
      <h1>Autocomplete Book Search</h1>
      <Autocomplete searchText={searchText} setSearchText={setSearchText} />
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by author"
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        />
        <div className="filters">
          <input
            type="text"
            placeholder="Filter by subject"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
          />
        </div>

        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}>
          <option value="">All Languages</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      {selectedBook && <BookDetails book={selectedBook} />}
      <SearchResults results={results} onSelectBook={handleSelectBook} />
    </div>
  );
};

export default App;
