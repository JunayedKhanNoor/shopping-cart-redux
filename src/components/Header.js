import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import Cart from './Cart';
import './Header.css';
const Header = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <nav className="header-nav">
        <div className="header-ul">
          <div>
            <h2 className="header-h2" style={{ fontFamily: 'monospace', fontSize: '30px' }}>
              Redux Shopping App
            </h2>
          </div>
          <div className="header-section">
            <Cart />
            <button onClick={logOut} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
