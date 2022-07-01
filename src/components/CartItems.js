import React from 'react';

import './Cart.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem item={item}></CartItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
