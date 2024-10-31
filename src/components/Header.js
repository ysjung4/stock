import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    onSearch(searchQuery); // Send the search query
  };

  return (
    <div className="header">
      <h1>Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
};

export default Header;
