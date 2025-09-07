import React from "react";

const SearchBar = ({ query, setQuery }) => (
  <div className="my-6 flex justify-center">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search startups..."
      className="w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default SearchBar;
