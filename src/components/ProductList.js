import React, { useEffect, useState } from 'react';
import Modal from './Modal'; 
import "./Product.css"

function ProductList({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '', image: '', category: '' });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error("Error fetching data:", error));

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  const addProduct = () => { 
    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setProducts([...products, json]);
        setNewProduct({ title: '', price: '', description: '', image: '', category: '' }); 
        setModalOpen(false); 
      })
      .catch(error => console.error("Error adding product:", error));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="container">
        <h1 className="product-list-title">Product List</h1>
        <div className="button-container">
          <select 
            className="select-category"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button className="add-product-button" onClick={openModal}>Add Product</button>
        </div>
        <ul className="product-list">
          {filteredProducts.map(product => (
            <li key={product.id} className="product-item">
              <div className="image-container">
                <img src={product.image} alt={product.title} />
              </div>
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description.substring(0, 100)}...</p>
              <p><strong className="product-price">£{product.price}</strong></p>
            </li>
          ))}
        </ul>
      </div>
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSubmit={addProduct} 
        newProduct={newProduct}
        setNewProduct={setNewProduct}
      />
    </div>
  );
}

export default ProductList;
