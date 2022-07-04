import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        'https://react-redux-http-85a7c-default-rtdb.firebaseio.com/cartItems.json'
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'HTTP Request Failed',
          type: 'error',
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'Sending Request',
        type: 'warning',
      })
    );
    const sendRequest = async () => {
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
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    }
  };
};
