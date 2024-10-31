import React from 'react';
import './Modal.css'; // 모달 스타일

const Modal = ({ isOpen, onClose, onSubmit, newProduct, setNewProduct }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="modal-input"
            type="text" 
            placeholder="Title" 
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} 
          />
          <input 
            className="modal-input"
            type="number" 
            placeholder="Price" 
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
          />
          <input 
            className="modal-input"
            type="text" 
            placeholder="Description" 
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
          />
          <input 
            className="modal-input"
            type="text" 
            placeholder="Image URL" 
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
          />
          <input 
            className="modal-input"
            type="text" 
            placeholder="Category" 
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} 
          />
          <button type="submit" className="modal-button">Add Product</button>
        </form>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
