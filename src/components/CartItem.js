import React from 'react';
import { useDispatch } from 'react-redux';
import './Cart.css';
// import { cartActions } from './../store/cartSlice';
const CartItem = ({ item }) => {
  const { name, quantity, total, price, id } = item;
  const dispatch = useDispatch();
  // const removeHandler = () => {
  //   dispatch(cartActions.removeFromCart(id));
  // };
  // const addHandler = () => {
  //   dispatch(
  //     cartActions.addToCart({
  //       id,
  //       name,
  //       price,
  //     })
  //   );
  // };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions">-</button>
      <button className="cart-actions">+</button>
    </div>
  );
};

export default CartItem;
