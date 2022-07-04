import React from 'react';
import './App.css';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import { useEffect } from 'react';
import Notification from './components/Notification';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        'https://react-redux-http-85a7c-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    sendRequest();
  }, [cart]);
  return (
    <div className="App">
      <Notification type="success" message="Dummy message"></Notification>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
