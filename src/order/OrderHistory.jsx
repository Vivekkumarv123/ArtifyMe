import React, { useState, useEffect } from 'react';
import './OrderHistory.css';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="order-history-page">
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="order-history-list">
          {orders.map((order, index) => (
            <li key={index} className="order-history-item">
              <h2>Order #{index + 1}</h2>
              <p>Date: {order.date}</p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - Quantity: {item.quantity} - Price: ₹{item.price}
                  </li>
                ))}
              </ul>
              <p>Total Amount: ₹{order.totalAmount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
