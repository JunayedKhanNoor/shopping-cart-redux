import React from 'react';
import './App.css';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout';
import { useEffect } from 'react';
import Notification from './components/Notification';
import { uiActions } from './store/ui-slice';
let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    //Send state as Sending request
    const sendRequest = async () => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request',
          type: 'warning',
        })
      );
      const res = await fetch(
        'https://react-redux-http-85a7c-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //Send State as Request is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sent Request To Database Successfully',
          type: 'success',
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification?.type} message={notification?.message}></Notification>
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
