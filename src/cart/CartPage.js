import React, { useState, useEffect } from 'react';
import './CartPage.css';

function CartPage() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = () => {
    if (!paymentMethod) {
      setShowPaymentAlert(true);
      return;
    }

    // Prepare order details
    const order = {
      date: new Date().toLocaleDateString(),
      items: cart,
      totalAmount
    };

    // Save order to localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    storedOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(storedOrders));

    // Clear the cart
    localStorage.removeItem('cart');
    setCart([]);
    setTotalAmount(0);

    setShowAlert(true);
  };

  return (
    <div className="cart-page-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-page-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-page-item">
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
              </li>
            ))}
          </ul>
          <h2 className="cart-page-total">Total Amount: ₹{totalAmount}</h2>
          <div className="cart-page-payment">
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="cash" 
                checked={paymentMethod === 'cash'}
                onChange={handlePaymentChange} 
              /> Cash on Delivery
            </label>
            <br />
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="upi" 
                checked={paymentMethod === 'upi'}
                onChange={handlePaymentChange} 
              /> UPI on Delivery
            </label>
          </div>
          <button className="cart-page-button" onClick={handleSubmit}>Place Order</button>
        </>
      )}

      {showAlert && (
        <div className="cart-page-alert">
          <div className="cart-page-alert-content">
            <h2>Order Confirmed</h2>
            <p>Your order has been successfully placed!</p>
            <button className="close-button" onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}

      {showPaymentAlert && (
        <div className="cart-page-alert">
          <div className="cart-page-alert-content">
            <h2>Payment Method Required</h2>
            <p>Please select a payment method to proceed with your order.</p>
            <button className="close-button" onClick={() => setShowPaymentAlert(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
