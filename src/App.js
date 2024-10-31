import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import About from './components/About'; // About 컴포넌트 import

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
