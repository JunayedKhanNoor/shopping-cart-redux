import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import './Cart.css';

const CartItem = ({ item }) => {
  const { name, quantity, totalPrice, price, id } = item;
  const dispatch = useDispatch();
  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <span> {name}</span>
      <span>${price} /-</span>
      <span>x{quantity}</span>
      <span>Total ${totalPrice}</span>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
