import React, { useState } from "react";
import { meny } from "./data/meny";
import Menu from "./components/menu";
import styles from "./App.module.css";

console.log(meny);
function App() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Restaurant Meny</h1>

      {/* Filter-buttons */}
      <div className={styles.filterContainer}>
        {["Alle", "Forrett", "Hovedrett", "Dessert"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.activeButton : ""}
            onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Søk etter retter..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Menu
        dishes={meny}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
