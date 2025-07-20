import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css'; // Import the CSS file

function ProductPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Chair', quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tD1bbwegj2jfISrimWYuQ1vbgtKx9xnmjQ&s', description: 'Stylish and comfortable chair', price: 2500 },
    { id: 2, name: 'Chair', quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4KQ-NWj4s-t9P6BWBovGaFdktalWlUSxpw&s', description: 'Modern chair with ergonomic design', price: 3000 },
    { id: 3, name: 'Desk', quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjc7av7HsYylAgvSlPIYfVPCzThej5_IX4Jw&s', description: 'Elegant desk with ample space', price: 4500 },
    { id: 4, name: 'Desk', quantity: 0, image: 'https://woodenbazar.com/cdn/shop/files/86e4021ff8254e5ba9d38fe7e3d3358c.webp?v=1686572582', description: 'Classic wooden desk', price: 5000 },
    { id: 5, name: 'Table', quantity: 0, image: 'https://m.media-amazon.com/images/I/91cX-cB6L5L._AC_UF1000,1000_QL80_.jpg', description: 'Round table with modern design', price: 6000 },
    { id: 6, name: 'Table', quantity: 0, image: 'https://i.etsystatic.com/22947138/r/il/5cf930/3189469692/il_570xN.3189469692_4g3d.jpg', description: 'Dining table with a sleek finish', price: 3500 },
    { id: 7, name: 'Wardrobe', quantity: 0, image: 'https://www.ikea.com/in/en/images/products/pax-wardrobe-combination-white__1080341_pe857977_s5.jpg?f=xl', description: 'Spacious wardrobe with adjustable shelves', price: 8000 },
    { id: 8, name: 'Wardrobe', quantity: 0, image: 'https://ii1.pepperfry.com/media/catalog/product/o/r/1100x1210/organza-4-door-wardrobe-in-frosty-white-finish-with-mirror-organza-4-door-wardrobe-in-frosty-white-f-xlxyul.jpg', description: 'Elegant wardrobe with built-in mirror', price: 7500 },
  ]);
  // Removed unused 'cart' state to fix eslint warning
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Removed cart loading since 'cart' state is not used
  }, []);

  const updateQuantity = (id, qty) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, quantity: qty } : p
    ));
  };

  const increaseQuantity = (id) => {
    const product = products.find(p => p.id === id);
    updateQuantity(id, product.quantity + 1);
  };

  const decreaseQuantity = (id) => {
    const product = products.find(p => p.id === id);
    if (product.quantity > 0) {
      updateQuantity(id, product.quantity - 1);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = storedCart.findIndex(p => p.id === product.id);
    
    if (existingProductIndex > -1) {
      storedCart[existingProductIndex].quantity += product.quantity;
    } else {
      storedCart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(storedCart));
    setShowAlert(true);
  };

  const viewCart = () => {
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '150px', height: 'auto', display: 'block', marginBottom: '10px' }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <input
                type="number"
                min="0"
                value={product.quantity}
                readOnly
                style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
              />
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={viewCart} style={{ marginTop: '20px' }}>View Cart</button>

      {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <h2>Item Added to Cart</h2>
            <p>Your item has been successfully added to the cart.</p>
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;