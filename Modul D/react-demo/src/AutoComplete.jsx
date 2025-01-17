import React, { useState } from "react";

const AutoComplete = () => {
  const carBrands = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Dodge",
    "Ford",
    "Honda",
    "Hyundai",
    "Kia",
    "Mazda",
    "Nissan",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Mitsubishi",
    "Porsche",
    "Lamborghini",
    "Saab",
    "Fiat",
    "Opel",
    "Königsegg",
    "Oles",
    "Troll",
    "Rubens",
    "Nicklas",
    "Angelica",
    "Pasha",
    "Villius",
    "Pil",
    "John Deer",
    "Johnny",
    "Jane Doe",
    "Seat",
  ];

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update the inputValue state
    if (value) {
      setSuggestions(
        carBrands.filter((brand) =>
          brand.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <p>Filterer på: {inputValue}</p>
      <input
        type="text"
        placeholder="Bilmerke"
        value={inputValue}
        onChange={handleInput}
      />
      <ul id="forslag">
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
