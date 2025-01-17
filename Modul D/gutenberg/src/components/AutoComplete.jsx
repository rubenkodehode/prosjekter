import React from "react";

const AutoComplete = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search for books"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default AutoComplete;
